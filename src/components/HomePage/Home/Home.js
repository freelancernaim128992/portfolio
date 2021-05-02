import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../../SharedComponent/Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;