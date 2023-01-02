import React from 'react';
import profile from '../images/profil.JPG';
import style from './AboutMe.module.css';
import aboutMe from '../files/Aboutme.pdf';
import resume from '../files/resume.pdf';
import postman from '../images/postman.png';
import codewars from '../images/codewars.png';
import github from '../images/github.png';
import codepen from '../images/codepen.png';
import portfolio from '../images/portfolio.png';

const AboutMe = props => {

    return (
        <div id='about' className={style.cont}>
            <img className={style.pic} src={profile} alt="" />
            <h5 >Nedim Begić</h5>
            <div className={style.info}>
                <a className={style.files} href={aboutMe} target="_blank">About Me </a>
                <a className={style.files} href={resume} target='_blank'>Resume</a>
            </div>
            <h4>Tools I use:</h4>
            <div className={style.icons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                <img src={postman} alt="" />
            </div>
            <h4>Basic knowledge:</h4>
            <div className={style.icons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <i className="devicon-express-original-wordmark"></i>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            </div>
            <div className={style.coding}>
                <h4>Example of code:</h4>
                <div className={style.code}>
                    <div>
                        <a href='https://github.com/NedimBegic' target='_blank'><img src={github} alt="github" /></a>
                        <a href="https://www.codewars.com/users/NedimBuBa/completed_solutions" target='_blank'><img src={codewars} alt="codewars" /></a>
                    </div>
                    <div>
                        <a href="https://codepen.io/your-work/" target='_blank'> <img src={codepen} alt="codepen" /></a>
                        <a href="https://github.com/NedimBegic/myPortifolio-React-/tree/main" target='_blank'><img src={portfolio} alt="portfolio"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;