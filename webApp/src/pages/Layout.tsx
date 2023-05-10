import React, { ReactNode } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

interface LayoutProps {
    content: ReactNode;
    title?: string;
    arrowBack?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ content, title, arrowBack }) => {
    return (
        <div id='content'>
            <Header title={title} arrowBack={arrowBack} />
            {content}
            <NavBar />
        </div>
    );
};

export default Layout;