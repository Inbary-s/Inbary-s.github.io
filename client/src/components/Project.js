import React, { useState } from 'react';

const Project = (props) => {
    const [projectCard, setProjectCard] = useState({
        src: props.data.src,
        tooltip: true
    })

    const handleHover = (e) => {
        // console.log (props);
        setProjectCard({ src: props.data.dataHover })
    }

    const handleAway = (e) => {
        setProjectCard({ src: props.data.src })
    }

    // href={props.data.href}
    return(
        <div className="projects col s6">
            <img onMouseOver={handleHover} onMouseOut={handleAway} className="project" src={projectCard.src} data-hover={props.data.dataHover} className="images" alt={props.data.alt}/>
            <div className="tooltipped" data-position={props.data.dataPosition} data-tooltip={props.data.dataTooltip}></div>
        </div>
    )
}

export default Project;