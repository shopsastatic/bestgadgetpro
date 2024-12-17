import gql from "graphql-tag";

export const CategorySeoQuery = gql`
  query CategorySeoQuery($slug: ID!) {
  category(id: $slug, idType: SLUG) {
    seo {
      title
      metaDesc
      metaKeywords
      metaRobotsNoindex
      metaRobotsNofollow 
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
        altText
        mediaDetails {
          height
          width
        }
      }
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
        altText
        mediaDetails {
          height
          width
        }
      }
      canonical
      schema {
        raw
      }
    }
    name
    description
    uri
  }
}
`;
