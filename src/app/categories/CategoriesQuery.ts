import { gql } from 'graphql-tag';

export const CategoriesQuery = gql`
  query MenuSideBarQuery {
    menuItems(where: { location: CATEGORIES }) {
      nodes {
          uri
          target
          label
          parentId
          menuAddons {
            menuIcon
            trending
          }
      }
    }
  }
`;