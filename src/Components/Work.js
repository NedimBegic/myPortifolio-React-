import React, {useState} from 'react';
import style from './Work.module.css';
import Item from './Item';
import nasa from '../images/nasa.png';
import tiktaktoe from '../images/tiktaktoe.png';
import bank from '../images/bankacc.png';
import gadget from '../images/gadgets.png';
import task from '../images/task.png';
import expenses from '../images/expenses.png';
import mining from '../images/mining.png';

const Work = props => {
    const [index, setIndex] = useState(0);

    const leftHandler = _ => {
        let newIndex = index === 0 ? list.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const rightHandler = _ => {
        let newIndex = index === list.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
    }

    class List {
        constructor(name, img, link, code, js, react, bs, node, ex, md, span, desc){
            this.name = name;
            this.img = img;
            this.link = link;
            this.code = code;
            this.js = js;
            this.react = react;
            this.bs = bs;
            this.node = node;
            this.ex = ex;
            this.md = md;
            this.span = span;
            this.desc = desc;
        }
    }
    let nasaApi = new List ('Nasa Api', nasa, 'https://my-nasa-api.netlify.app/', 'https://github.com/NedimBegic/nasa-api', 'block', 'none', 'none', 'none', 'none', 'none', 'block', 'Learning about using APIs where the user types in the date and gets a photo and description of that day from NASA.');
    let tikTakToe = new List ('Tik-Tak-Toe', tiktaktoe, 'https://tik-tak-toe-myversion.netlify.app/', 'https://github.com/NedimBegic/Tik-Tak-Toe', 'block', 'none', 'none', 'none', 'none', 'none', 'block', 'My version of the game where players can choose their sign');
    let bankacc = new List ('Bank account', bank, 'https://frontentd-test-make-account.netlify.app/', 'https://github.com/NedimBegic/Bank-accaunt--frontend-test','block', 'none', 'none', 'none', 'none', 'none', 'block', 'A front-end junior test from made in Figma that I did for practice.');
    let gadgets = new List ('Gadgets', gadget, 'https://gadgetsweb.netlify.app/', 'https://github.com/NedimBegic/gadgets', 'block', 'none', 'none', 'none', 'none', 'none', 'block', 'Practice functionality: stopwatch, clock, calculater, word counter, background changer, screen saver, themes.');
    let addTask = new List ('First React project', task, 'https://react-todo123.netlify.app/', 'https://github.com/NedimBegic/React-todoList', 'none', 'block', 'none', 'none', 'none', 'none', 'none', 'First practice with react by building a Todo list.');
    let expense = new List ('Expense tracker', expenses, 'https://expand-tracker.netlify.app/', 'https://github.com/NedimBegic/Expense-tracker', 'none', 'block', 'none', 'none', 'none', 'none', 'none', 'Practice lifting state up and rendering components with React.');
    let report = new List ('Mining Report', mining, 'https://report123.netlify.app/', 'https://github.com/NedimBegic/miningReport', 'block', 'none', 'none', 'none', 'none', 'none', 'none', 'Dynamic tables, storing info in local storage, adding notes and images, print in pdf. Web app for Mining engineers at Adriatic Metals');

    const list = [report, expense, addTask, gadgets, bankacc, tikTakToe, nasaApi];

    return (
        <div className={style.frag}>
            <button className={style.leftButton} onClick={leftHandler}>{'<'}</button>
            <Item list={list} i={index}/>
            <button className={style.rightButton} onClick={rightHandler}>{'>'}</button>
        </div>
    )
};


export default Work;