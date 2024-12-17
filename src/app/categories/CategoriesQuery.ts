import { gql } from 'graphql-tag';

export const CategoriesQuery = gql`
  query GetCategories {
    categories(where: { parent: null }, first: 100) {
      nodes {
        id
        name
        slug
        ... on Category {
          children {
            nodes {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`;