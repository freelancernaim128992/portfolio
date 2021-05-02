import React from 'react';
import './Header.css'
import Navbar from '../../SharedComponent/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain'

const Header = () => {
    return (
        <header className="header-container">
            <Navbar />
            <HeaderMain></HeaderMain>
        </header>
    );
};

export default Header;