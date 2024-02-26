import React from 'react';
import Header from './header';
import Footer from './footer';
import '../style/footer.css';
import '../style/header.css';

const Layout = (props) =>
{
    return(
        <>
        <Header />
        {props.children}
        <Footer />
        </>
    );   
}

export default Layout;