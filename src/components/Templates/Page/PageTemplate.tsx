import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";
import Home from "@/components/Layouts/home";

export default async function PageTemplate({ node, isFrontPage }: any) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  if(isFrontPage) {
    return (
      <Home />
    )
  }

  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: page?.content || "" }} />
    </div>
  );
}
