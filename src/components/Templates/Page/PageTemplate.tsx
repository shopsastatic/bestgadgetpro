import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";
import Home from "@/components/Layouts/home";

export default async function PageTemplate({ node, isFrontPage }: any) {
  let page;
  
  if(node) {
    const response = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
      id: node.databaseId,
    });
    page = response.page;
  }

  if(isFrontPage) {
    return (
      <Home />
    );
  }

  if(node) {
    return (
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: page?.content || "" }} />
      </div>
    );
  }

  return null;
}