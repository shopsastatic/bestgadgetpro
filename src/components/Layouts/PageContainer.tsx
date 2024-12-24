import React from 'react';
import Header from './header';
import Footer from './footer';
import { print } from "graphql/language/printer";
import gql from 'graphql-tag';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import { RootQueryToMenuItemConnection } from '@/gql/graphql';

const PageContainer = async ({ children }: { children: React.ReactNode }) => {
    const menuQuery = gql`
        query MenuQuery {
            menuItems(where: { location: PRIMARY }) {
                nodes {
                    uri
                    target
                    label
                    parentId
                }
            }
        }
    `;

    const menuSidebarQuery = gql`
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

    const { menuItems } = await fetchGraphQL<{
        menuItems: RootQueryToMenuItemConnection;
    }>(print(menuQuery));

    const menuSidebarItems = await fetchGraphQL<{
        menuItems: any;
    }>(print(menuSidebarQuery)) as any;

    const menuSidebar = menuSidebarItems.menuItems

    return (
        <div>
            <Header menuItems={menuItems} menuSidebarItems={menuSidebar} />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageContainer;
