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
            menuItems(where: { location: MAIN_MENU }) {
                nodes {
                    uri
                    target
                    label
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
                }
            }
        }
    `;

    const { menuItems } = await fetchGraphQL<{
        menuItems: RootQueryToMenuItemConnection;
    }>(print(menuQuery));

    const { menuSidebarItems } = await fetchGraphQL<{
        menuSidebarItems: any;
    }>(print(menuSidebarQuery));


    console.log(menuSidebarItems)

    return (
        <div>
            <Header menuItems={menuItems} menuSidebarItems={menuSidebarItems} />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageContainer;
