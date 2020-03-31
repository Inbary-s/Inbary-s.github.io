import React from 'react';

export default (props) => {
    return(
        <a href={props.data.href} target="blank" class="tooltipped project" data-position={props.data.dataPosition} data-tooltip={props.data.dataTooltip}><img src={props.data.src} data-src={props.data.dataSrc} data-hover={props.data.dataHover} className="images" alt={props.data.alt}/></a>
    )
}