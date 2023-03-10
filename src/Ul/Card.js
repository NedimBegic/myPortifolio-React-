import React from 'react';
import card from './Card.module.css';


const Card = props => {
    const classes = card.all + " " + props.className;
    return <div onScroll={props.onScroll} className={classes}>{props.children}</div>
};

export default Card;