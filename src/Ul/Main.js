import React from 'react';
import style from './Main.module.css';

const Main = props => <div className={style.main}>{props.children}</div>

export default Main;