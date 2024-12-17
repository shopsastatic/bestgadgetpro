import gql from "graphql-tag";

export const CategoryQuery = gql`
  query Category($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      id
	  databaseId
	  description
	  name
	  uri
	  count
	  seo {
			metaDesc
			metaKeywords
			title
	  }
	  ancestors {
	 	nodes {
			id
			name
			uri
		}
	  }
	  children {
		nodes {
			name
			uri
			... on Category {
				posts (first: 6) {
					nodes {
						title
						uri
						featuredImage {
							node {
								sourceUrl
								altText
							}
						}
					}
				}
			}
		}
      }
    }
  }
`;