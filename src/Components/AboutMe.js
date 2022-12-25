import React from 'react';
import profile from '../images/profil.JPG';
import style from './AboutMe.module.css';
import aboutMe from '../files/Aboutme.pdf';
import resume from '../files/resume.pdf';

const AboutMe = props => {

    return (
        <div id='about' className={style.cont}>
            <img className={style.pic} src={profile} alt="" />
            <h5 >Nedim Begić</h5>
            <div className={style.info}>
                <a href={aboutMe} target="_blank">About Me </a>
                <a href={resume} target='_blank'>Resume</a>
            </div>
            <h4>Tools I use:</h4>
            <div className={style.icons}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
            </div>
            <h4>Basic knowledge:</h4>
            <div className={style.icons}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <i className="devicon-express-original-wordmark"></i>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            </div>
            
        </div>
    );
};

export default AboutMe;