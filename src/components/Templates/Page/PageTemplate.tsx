import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";
import Home from "@/components/Layouts/home";

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  if(node.isFrontPage) {
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
