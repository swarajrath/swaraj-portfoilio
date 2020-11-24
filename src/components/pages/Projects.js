import React from 'react';
import ProjectCards from '../containers/ProjectCards';

const Projects = () => {
    return (
        <div>
            <div className="d-flex flex-column">
                <div className="p-2">
                    <div className="d-flex justify-content-center">
                        <ProjectCards />
                        <ProjectCards />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
