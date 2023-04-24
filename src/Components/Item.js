import React from "react";
import style from "./Item.module.css";
import { motion } from "framer-motion";

const Item = (props) => {
  // the index of the list
  const i = props.i;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      key={i}
      className={style.item}
    >
      <h4>{props.list[i].name}</h4>
      <div className={style.pageImg}>
        <img src={props.list[i].img} alt="" />
      </div>
      <p>For more info visit links below:</p>
      <div className={style.links}>
        <a href={props.list[i].link} target="_blank">
          Page
        </a>
        <a href={props.list[i].code} target="_blank">
          Code
        </a>
      </div>
      <div className={style.icons}>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img
          style={{ display: `${props.list[i].js}` }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
        <img
          style={{ display: `${props.list[i].react}` }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <img
          style={{ display: `${props.list[i].bs}` }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        />
        <img
          style={{ display: `${props.list[i].node}` }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />
        <img
          style={{
            display: `${props.list[i].next}`,
            backgroundColor: "white",
            padding: ".1em",
            borderRadius: "50%",
          }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        />
        <i
          style={{ display: `${props.list[i].ex}` }}
          className="devicon-express-original-wordmark"
        ></i>
        <img
          style={{ display: `${props.list[i].md}` }}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        />
      </div>
      <span style={{ display: `${props.list[i].span}` }}>
        (This page is not mobile responsive.)
      </span>
      <p>{props.list[i].desc} (more on github)</p>
    </motion.div>
  );
};

export default Item;
