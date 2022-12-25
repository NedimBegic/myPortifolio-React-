import React from 'react';
import style from './Work.module.css';
import Item from './Item';

const Work = props => {

    const list = [
        {
            name:'Naziv',
            img: 'url',
            link: 'url',
            code: 'url',
            span: false,
            desc: 'some old mother fucker'
        }
    ];

    return (
        <div className={style.frag}>
            <Item list={list}/>
        </div>
    )
};


export default Work;