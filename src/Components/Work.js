import React, { useState } from "react";
import style from "./Work.module.css";
import Item from "./Item";
import nasa from "../images/nasa.png";
import tiktaktoe from "../images/tiktaktoe.png";
import bank from "../images/bankacc.png";
import gadget from "../images/gadgets.png";
import mining from "../images/mining.png";
import shoppingImg from "../images/shopping.png";
import { motion } from "framer-motion";
import donerPic from "../images/doner.png";
import recipe from "../images/share.png";
import sigma from "../images/sigma.png";

const Work = (props) => {
  const [index, setIndex] = useState(0);

  const leftHandler = (_) => {
    let newIndex = index === 0 ? list.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const rightHandler = (_) => {
    let newIndex = index === list.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  class List {
    constructor(
      name,
      img,
      link,
      code,
      js,
      react,
      next,
      bs,
      node,
      ex,
      md,
      span,
      desc
    ) {
      this.name = name;
      this.img = img;
      this.link = link;
      this.code = code;
      this.js = js;
      this.react = react;
      this.next = next;
      this.bs = bs;
      this.node = node;
      this.ex = ex;
      this.md = md;
      this.span = span;
      this.desc = desc;
    }
  }
  let nasaApi = new List(
    "Nasa Api",
    nasa,
    "https://my-nasa-api.netlify.app/",
    "https://github.com/NedimBegic/nasa-api",
    "block",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "block",
    "Learning about using APIs where the user types in the date and gets a photo and description of that day from NASA."
  );
  let tikTakToe = new List(
    "Tik-Tak-Toe",
    tiktaktoe,
    "https://tik-tak-toe-myversion.netlify.app/",
    "https://github.com/NedimBegic/Tik-Tak-Toe",
    "block",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "block",
    "My version of the game where players can choose their own sign"
  );
  let bankacc = new List(
    "Bank account",
    bank,
    "https://frontentd-test-make-account.netlify.app/",
    "https://github.com/NedimBegic/Bank-accaunt--frontend-test",
    "block",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "block",
    "A front-end junior test from made in Figma that I did for practice."
  );
  let gadgets = new List(
    "Gadgets",
    gadget,
    "https://gadgetsweb.netlify.app/",
    "https://github.com/NedimBegic/gadgets",
    "block",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "block",
    "Practice functionality: stopwatch, clock, calculater, word counter, background changer, screen saver, themes."
  );

  let report = new List(
    "Mining Report",
    mining,
    "https://report123.netlify.app/",
    "https://github.com/NedimBegic/miningReport",
    "block",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "Dynamic tables, storing info in local storage, adding notes and images, print in pdf. This is the demo version."
  );
  let shopping = new List(
    "Fullstack Shopping list",
    shoppingImg,
    "https://shoppinglist.up.railway.app/",
    "https://github.com/NedimBegic/Fullstack---Shoping-List",
    "block",
    "none",
    "none",
    "none",
    "block",
    "block",
    "block",
    "none",
    "MVC structure, EJS for render, learning basics of node, express, and MongoDB"
  );
  let sigmaDev = new List(
    "Sigma Development",
    sigma,
    "https://sigmadev.netlify.app/",
    "https://github.com/NedimBegic/Sigma-Development-landingPage-",
    "block",
    "block",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "Building a landing page for Sigma Development company from a figma design"
  );
  let doner = new List(
    "Donner House",
    donerPic,
    "https://doner-house.netlify.app/",
    "https://github.com/NedimBegic/Doner-House-React-",
    "block",
    "block",
    "none",
    "block",
    "none",
    "none",
    "none",
    "none",
    "Order food app, menaging state with useContext and useReducer, building background slider"
  );
  let recipes = new List(
    "Share Recipes",
    recipe,
    "https://sharerecipes1.vercel.app/",
    "https://github.com/NedimBegic/Share-Recipes-Next.js",
    "block",
    "block",
    "block",
    "none",
    "none",
    "none",
    "block",
    "none",
    "Full-stack app for sharing your recipes, rating and commenting other."
  );

  const list = [
    recipes,
    doner,
    report,
    sigmaDev,
    shopping,
    gadgets,
    bankacc,
    tikTakToe,
    nasaApi,
  ];

  return (
    <div className={style.workAll}>
      <motion.h2
        initial={{ opacity: 0, y: 3 }}
        whileInView={{ opacity: 1, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={style.h2}
        id="work"
      >
        My Work
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={style.frag}
      >
        <button className={style.leftButton} onClick={leftHandler}>
          {"<"}
        </button>
        <Item list={list} i={index} />
        <button className={style.rightButton} onClick={rightHandler}>
          {">"}
        </button>
      </motion.div>
    </div>
  );
};

export default Work;
