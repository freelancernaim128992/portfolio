import React from 'react';
import DryClean from '../DryClean/DryClean';
import GroceryShop from '../GroceryShop/GroceryShop';

const ProjectsMain = () => {
    return (
        <section>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <DryClean />
                    <GroceryShop />
                </div>
            </div>
        </section>
    );
};

export default ProjectsMain;