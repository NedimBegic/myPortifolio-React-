import React, { useRef, useState } from "react";
import styles from "./Connect.module.css";
import gif from "../images/bug.gif";
import ErrorModule from "./ErrorModule";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Connect = (props) => {
  const [mailValid, setMailValid] = useState(false);
  const [errorContent, setErrorContent] = useState("");
  const mailRef = useRef();
  const textRef = useRef();
  const form = useRef();

  const onHideError = () => {
    setMailValid(false);
    setErrorContent("");
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    const mail = mailRef.current.value;
    const text = textRef.current.value;
    if (!mail.includes("@")) {
      setMailValid(true);
      setErrorContent("Email must include @");
      return;
    }
    if (mail.length < 6) {
      setMailValid(true);
      setErrorContent("Mail must have minimum 6 letters");
      return;
    }
    if (text.length < 10) {
      setMailValid(true);
      setErrorContent("Message must have minimum 10 letters");
      return;
    }

    emailjs
      .sendForm(
        "service_vlan1v4",
        "template_sc37x1o",
        form.current,
        "3-io-zQlRB8FISNHb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setMailValid(true);
    setErrorContent("Message sent!");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -30 }}
      transition={{ duration: 1 }}
      className={styles.all}
    >
      {mailValid && (
        <ErrorModule content={errorContent} hideModule={onHideError} />
      )}
      <div id="connect" className={styles.box}>
        <h1>Connect</h1>
        <div>
          <a
            href="https://github.com/NedimBegic"
            target="_blank"
            className={styles.gh + " " + "fa fa-github" + " " + styles.icon}
          ></a>
          <a
            href="https://www.linkedin.com/in/nedim-begic-a42210245/"
            target="_blank"
            className={styles.ln + " " + "fa fa-linkedin" + " " + styles.icon}
          ></a>
          <a
            href="https://www.facebook.com/nedim.b.begic/"
            target="_blank"
            className={styles.fb + " " + "fa fa-facebook" + " " + styles.icon}
          ></a>
          <a
            href="https://www.instagram.com/nedim_begic93/"
            target="_blank"
            className={styles.in + " " + "fa fa-instagram" + " " + styles.icon}
          ></a>
        </div>
        <div>
          <i> 📱 - 064/4078534</i>
        </div>
      </div>
      <form ref={form} onSubmit={onSendMessage} className={styles.email}>
        <input
          ref={mailRef}
          type="text"
          name="email"
          placeholder="your email"
        />
        <textarea
          ref={textRef}
          rows="5"
          cols="30"
          name="message"
          placeholder="Type your message here"
        ></textarea>
        <button type="submit">Send message</button>
      </form>
      <img className={styles.bug} src={gif} alt="bug" />
    </motion.div>
  );
};

export default Connect;
