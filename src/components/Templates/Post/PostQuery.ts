import gql from "graphql-tag";

export const PostQuery = gql`
  query PostQuery($id: ID!, $preview: Boolean = false) {
    post(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      uri
      date
      status
      title
      contentEggData
      numberOfToplist {
        numberOfToplist
      }
      content
      author {
        node {
          name
          uri
        }
      }
    }
  }
`;
