import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";

import { setSeoData } from "@/utils/seoData";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentInfoQuery } from "@/queries/general/ContentInfoQuery";
import { ContentNode } from "@/gql/graphql";
import PageTemplate from "@/components/Templates/Page/PageTemplate";
import { nextSlugToWpSlug } from "@/utils/nextSlugToWpSlug";
import PostTemplate from "@/components/Templates/Post/PostTemplate";
import { SeoQuery } from "@/queries/general/SeoQuery";
import gql from "graphql-tag";
import { CategorySeoQuery } from "@/queries/category/CategorySeoQuery";
import { CategoryQuery } from "@/queries/category/CategoryQuery";
import CategoryTemplate from "@/components/Templates/Category/CategoryTemplate";

export const revalidate = 600;

export async function generateMetadata({ params }: any) {
  const slug = params?.slug ? nextSlugToWpSlug(params.slug) : "/";
  const isPreview = slug.includes("preview");

  const { node: nodeType } = await fetchGraphQL(
    print(gql`
      query NodeTypeQuery($uri: String!) {
        node: nodeByUri(uri: $uri) {
          __typename
        }
      }
    `),
    {
      uri: slug
    }
  );

  if (nodeType?.__typename === 'Category') {
    const { category } = await fetchGraphQL(
      print(CategorySeoQuery),
      {
        slug: slug
      }
    );

    const metadata = setSeoData({ seo: category.seo });
    return {
      ...metadata,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
      },
    } as Metadata;
  }

  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(SeoQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    },
  );

  if (!contentNode) {
    return notFound();
  }

  const metadata = setSeoData({ seo: contentNode.seo });

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
    },
  } as Metadata;
}

export function generateStaticParams() {
  return [];
}

export default async function Page({ params }: any) {
  const slug = params?.slug ? nextSlugToWpSlug(params.slug) : "";
  const isPreview = slug.includes("preview");

  const { node: nodeType } = await fetchGraphQL(
    print(gql`
      query NodeTypeQuery($uri: String!) {
        node: nodeByUri(uri: $uri) {
          __typename
        }
      }
    `),
    {
      uri: slug
    }
  );

  if (nodeType?.__typename === 'Category') {
    const { category } = await fetchGraphQL(
      print(CategoryQuery),
      {
        slug: slug
      }
    );

    category.children.nodes = category?.children?.nodes?.filter(
      (node: any) => node.name !== "Arborist Merchandising Root"
    ) ?? [];

    return <CategoryTemplate node={category} />;
  }

  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(ContentInfoQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    },
  );

  if (!slug) {
    let isFrontPage = true
    return <PageTemplate node={contentNode} isFrontPage={isFrontPage} />
  }

  if (!contentNode) return notFound();


  switch (contentNode.contentTypeName) {
    case "page":
      return <PageTemplate node={contentNode} />;
    case "post":
      return <PostTemplate node={contentNode} />;
    default:
      return <p>{contentNode.contentTypeName} not implemented</p>;
  }
}