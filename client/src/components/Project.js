import React, { useState } from 'react';

const Project = (props) => {
    const [projectCard, setProjectCard] = useState({
        src: props.data.src
    })

    const handleHover = (e) => {
        setProjectCard({ src: props.data.dataHover })
    }

    const handleAway = (e) => {
        setProjectCard({ src: props.data.src })
    }
    
    const handleId = (e) => {
        setProjectCard({ id: props.data.id })
        // console.log(props.data.id);
    }
    // console.log(props.data.id)
    // href={props.data.href}
    return(
        <div className="projects col s6 card" id={props.data.id}>
            <div className="card-image card-action sticky-action waves-effect waves-block waves-light">
                <img onMouseOver={handleHover} onMouseOut={handleAway} className="project activator" src={projectCard.src} data-hover={props.data.dataHover} className="images" alt={props.data.alt}/>
            </div>
            <div className="card-reveal">
                <span className="card-title text-darken-4">{props.data.alt}<i className="fas fa-times"></i></span>
                <p className="projectInfo">{props.data.dataTooltip}</p>
            </div>
            <div className="card-content">
                <span className="card-title activator text-darken-4">{props.data.alt}<i className="fas fa-ellipsis-v"></i></span>
                <p><a href={props.data.href}>GitHub</a> | <a href={props.data.deployedHref} className="deployed">Deployed App</a></p>
                </div>
        </div>
    )
}

export default Project;