import React from 'react';
import Card from '../Ul/Card';
import logo from '../images/BuBaLogo.png';
import styles from './Footer.module.css';

const Footer = props => {
    const classes = styles.footerAll + " " + props.className;

    return (
        <Card className={classes}>
            <div>
                <img src={logo} alt="" />
                <div className={styles.box}>
                    <a href="#about">
                        <span>ℹ️</span>
                        <span className={styles.no}>About Me</span>
                    </a>
                </div>
                <div className={styles.box}>
                    <a href="#">
                        <span>💼</span>
                        <span className={styles.no}>My Work</span>
                    </a>
                </div>
                <div className={styles.box}>
                    <a href="#connect">
                        <span>📧</span>
                        <span className={styles.no}>Connect</span>
                    </a>

                </div>
            </div>

        </Card>
    );
};

export default Footer;