import React from "react";
import profile from "../images/profil.jpg";
import style from "./AboutMe.module.css";
import aboutMe from "../files/Aboutme.pdf";
import resume from "../files/resume.pdf";
import postman from "../images/postman.png";
import codewars from "../images/codewars.png";
import github from "../images/github.png";
import codepen from "../images/codepen.png";
import portfolio from "../images/portfolio.png";
import { motion } from "framer-motion";

const AboutMe = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -30 }}
      transition={{ duration: 1 }}
      id="about"
      className={style.cont}
    >
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className={style.pic}
        src={profile}
        alt="my photo"
      />
      <h5>Nedim Begić</h5>
      <div className={style.info}>
        <a className={style.files} href={aboutMe} target="_blank">
          About Me{" "}
        </a>
        <a className={style.files} href={resume} target="_blank">
          Resume
        </a>
      </div>
      <h4>Tools I use:</h4>
      <div className={style.icons}>
        <motion.img
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />
        <motion.img
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />
        <motion.img
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
        <motion.img
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <motion.img
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "0 .1em",
          }}
          alt="next"
        />

        <motion.img
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        />
        <motion.img
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          src={postman}
          alt="postman"
        />
      </div>
      <h4>Basic knowledge:</h4>
      <div className={style.icons}>
        <motion.img
          animate={{ x: [0, 20, 0] }}
          className={style.backend}
          transition={{ duration: 5, repeat: Infinity }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
        <motion.i
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="devicon-express-original-wordmark"
        ></motion.i>
        <motion.img
          animate={{ x: [0, -20, 0] }}
          className={style.backend}
          transition={{ duration: 5, repeat: Infinity }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        />
      </div>
      <div className={style.coding}>
        <h4>Example of code:</h4>
        <div className={style.code}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/NedimBegic" target="_blank">
              <img src={github} alt="github" />
            </a>
            <a
              href="https://www.codewars.com/users/NedimBuBa/completed_solutions"
              target="_blank"
            >
              <img src={codewars} alt="codewars" />
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://codepen.io/your-work/" target="_blank">
              {" "}
              <img src={codepen} alt="codepen" />
            </a>
            <a
              href="https://github.com/NedimBegic/myPortifolio-React-/tree/main"
              target="_blank"
            >
              <img src={portfolio} alt="portfolio" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
