import React from 'react';
import styles from './Connect.module.css';
import gif from '../images/bug.gif';

const Connect = props => {

    return (
        <div className={styles.all}>
            <div id='connect' className={styles.box}>
                <h1>Connect</h1>
                <div>
                    <a href="https://github.com/NedimBegic" target='_blank' className={styles.gh + " " + "fa fa-github" + " " + styles.icon}></a>
                    <a href="https://www.linkedin.com/in/nedim-begic-a42210245/" target='_blank' className={styles.ln + " " + "fa fa-linkedin" + " " + styles.icon}></a>
                    <a href="https://www.facebook.com/nedim.b.begic/" target='_blank' className={styles.fb + " " + "fa fa-facebook" + " " + styles.icon}></a>
                    <a href="https://www.instagram.com/nedim_begic93/" target='_blank' className={styles.in + " " + "fa fa-instagram" + " " + styles.icon}></a>
                </div>
                <div>
                    <i> 📱 - 064/4078534</i>
                </div>
            </div>
            <img className={styles.bug} src={gif} alt="bug" />
            {/*             <div className={styles.road}></div>
 */}        </div>
    );
};

export default Connect;