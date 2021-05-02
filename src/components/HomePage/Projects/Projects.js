import React from 'react';
import dry from '../../../images/dry-clean.png'
import grocery from '../../../images/grocery.png'
import vehicle from '../../../images/vehicle.png'
import doctors from '../../../images/doctor.png'
import sports from '../../../images/sports.png'
import food from '../../../images/food.png'
import ProjectsInfo from '../ProjectsInfo/ProjectsInfo';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            img: dry,
            name: 'Dry Clean',
            desc: 'This is a Laundry Website. You can Order in This Website.'
            
        },
        {
            id: 2,
            img: grocery,
            name: 'Grocery Shops',
            desc: 'It is a Grocery Shop Website. You can Order product in This Website.'
            
        },
        {
            id: 3,
            img: vehicle,
            name: 'Vehicle Ride',
            desc: 'In This website You can booking for ride now with vehicles.'
            
        },
        {
            id: 4,
            img: doctors,
            name: 'Doctors portal',
            desc: 'This is a Doctors Website. In this website You can get appointment for doctor'
            
        },
        {
            id: 5,
            img: sports,
            name: 'Sports Leagues',
            desc: 'It is a Sports Website. In this website you see many team.'
            
        },
        {
            id: 6,
            img: food,
            name: 'Food Restaurant',
            desc: 'In this website You can see many food.'
        }
    ]
    return (
        <section>
            <div className="position-relative mb-5 pb-5">
                <h1 className="text-center fw-bold section-title">Projects</h1>
                <div className="border-style-container">
                    <span className="border-style"></span>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        projectsData.map(info => <ProjectsInfo key={info.id} info={info} />)
                    }
                    <div className="mt-5 mb-4 d-flex justify-content-center">
                        <Link to="/projects" className="btn-style">See Details</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;