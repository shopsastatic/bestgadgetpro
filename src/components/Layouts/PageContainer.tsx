import React from 'react';
import Header from './header';
import Footer from './footer';

const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageContainer;
