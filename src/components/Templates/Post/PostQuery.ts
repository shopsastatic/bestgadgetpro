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
      categories {
        nodes {
          name
          uri
        }
      }
      content
      author {
        node {
          databaseId
          uri
          username
          name
          ncUserMeta {
            ncBio
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            backgroundImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          description
          expert {
            areasOfExpertise
          }
        }
      }
    }
  }
`;
