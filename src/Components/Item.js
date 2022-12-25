import React from 'react';
import logo from '../images/bugCover.png';
import style from './Item.module.css';

const Item = props => {

    return (
        <div className={style.item}>
            <h2>My Work</h2>
            <h4>{props.list[0].name}</h4>
            <img src={logo} alt=""/>
            <div className={style.links}>
                <a href='#'>Link</a>
                <a href="#">Code</a>
            </div>
            <span>(Note: This page is not mobile responsive.)</span>
            <p>This project is made because I wanted to practic some react. Is vako it is nako and bal bal lba . You can see more detail on github.</p>
        </div>
    )
};

export default Item;