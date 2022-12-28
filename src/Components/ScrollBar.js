import React from "react";
import styles from './ScrollBar.module.css';
import spider from '../images/spider.png'

const ScrollBar = props => {

    return (
        <div className={styles.scrollBar}>
            <div className={styles.fill} style={{ height: `${props.scrollTop + "%"}` }}></div>
            <a href="#about"><img src={spider} className={styles.spider} alt="spider"/></a>
        </div>
    )
};

export default ScrollBar;