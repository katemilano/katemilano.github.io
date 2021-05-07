import React from 'react';
import './style.css';

const IntroAnimation = () => {
    const openP = "(";
    const closeP = ")";
    const openB = "{";
    const semicolon = ";";

    return (
        <pre id="typewriter">  
            <span className="var-blue">function</span> <span className="var-yellow">enterPortfolio </span>
            <span className="var-purple">if</span> <span className="var-black">{openP}!</span> 
            <span className="var-lightblue">job</span> <span className="var-black">{closeP} {openB}</span> 
            <span className="var-purple">while</span> <span className="var-black">{openB}</span> 
            <span className="var-lightblue">job </span> <span className="var-black">===</span> 
            <span className="var-blue">false</span> <span className="var-black">{closeP} {openB}</span> 
            <span className="var-yellow">showOffProjects </span> <span className="var-black">{openP} {closeP}{semicolon}</span>
            <span className="var-yellow">showOffSkills</span> <span className="var-black">{openP} {closeP}{semicolon}</span>
            <span className="var-yellow">impressFutureBoss</span> <span className="var-black">{openP} {closeP}{semicolon}</span>
            <span className="var-purple">else if</span> {openP} <span className="var-lightblue">job</span> {closeP} {openB}
            <span className="var-yellow">happyDance</span> {openP} {closeP}
        </pre>
    )
};

export default IntroAnimation;
