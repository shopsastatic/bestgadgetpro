import { gql } from 'graphql-tag';

export const AuthorQuery = gql`
  query GetAuthor($slug: ID!) {
    user(id: $slug, idType: SLUG) {
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
        posts (first: 3) {
            nodes {
                id
                title
                slug
                date
                excerpt
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
`;