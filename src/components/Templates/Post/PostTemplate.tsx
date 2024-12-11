import { print } from "graphql/language/printer";

import { ContentNode, Post } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";

import { PostQuery } from "./PostQuery";
import PageContainer from "@/components/Layouts/PageContainer";
import { PostHeader } from "./PostHeader/PostHeader";
import ProductCard from "./PostContent/ProductCard";
import { ComparisonTable } from "./PostContent/ComparisonTable";
import SeoContent from "./PostContent/SeoContent";

interface TemplateProps {
  node: ContentNode;
}

export default async function PostTemplate({ node }: TemplateProps) {
  const { post } = await fetchGraphQL<{ post: Post }>(print(PostQuery), {
    id: node.databaseId,
  });

  const toplistData = JSON.parse(post?.contentEggData as any)
  console.log(toplistData)

  return (
    <PageContainer>
      <PostHeader post={post} />
      <ProductCard />
      <ComparisonTable products={toplistData} />
      <SeoContent />
    </PageContainer>
  );
}
