import React from 'react';
import Project from '../components/Project';
import cards from '../utils/Projects.json';

export default () => {
    console.log(cards)
    return(
        <div className="row">
            {cards.map(card=><Project data={card} key={card.src} />)}
        </div>
                
    )
}