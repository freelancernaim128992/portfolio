import React from 'react';
import Footer from '../../SharedComponent/Footer/Footer';
import Navbar from '../../SharedComponent/Navbar/Navbar';
import ProjectsMain from '../ProjectsMain/ProjectsMain';

const AllProjects = () => {
    return (
        <div>
            <Navbar />
            <ProjectsMain />
            <Footer />
        </div>
    );
};

export default AllProjects;