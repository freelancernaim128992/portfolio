import React from 'react';

const Skills = () => {
    return (
        <div>
            <h3>My <span style={{color: '#4e44cd'}}>Skills</span></h3>
            <div className="">
                <h5 className="mt-3">HTML</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}> 100%</div>
                </div>
                <h5 className="mt-3">CSS</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}> 95%</div>
                </div>
                <h5 className="mt-3">Bootstrap</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}> 95%</div>
                </div>
                <h5 className="mt-3">JavaScript</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}> 90%</div>
                </div>
                <h5 className="mt-3">React js</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}> 80%</div>
                </div>
                <h5 className="mt-3">Node js</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}> 60%</div>
                </div>
                <h5 className="mt-3">MongoDB</h5>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}> 80%</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;