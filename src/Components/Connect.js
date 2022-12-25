import React from 'react';
import styles from './Connect.module.css';

const Connect = props => {

    return (
        <div id='connect' className={styles.box}>
            <h1>Connect</h1>
            <div>
            <a href="#" className={styles.fb + " " + "fa fa-facebook" + " " + styles.icon}></a>
            <a href="#" className={styles.ln + " " + "fa fa-linkedin" + " " + styles.icon}></a>
            <a href="#" className={styles.in + " " + "fa fa-instagram" + " " + styles.icon}></a>
            <a href="#" className={styles.gh + " " + "fa fa-github" + " " + styles.icon}></a>
            </div>
            <div>
            <i> 📱 - 064/4078534</i>
            </div>
        </div>
    );
};

export default Connect;