import React from 'react'
import {Header, SkillContainer, SkillContent, SkillCard} from './SkillSectionElements';
import js from '../../images/icons/javascript.png';
import html from '../../images/icons/html.png';
import css from '../../images/icons/css.webp';
import jquery from '../../images/icons/jquery.png';

import react from '../../images/icons/react.png';
import ajax from '../../images/icons/ajax.png';
import json from '../../images/icons/json.png';
import nodejs from '../../images/icons/nodejs.webp';
import mysql from '../../images/icons/mysql.png';
import mongodb from '../../images/icons/mongodb.png';
import express from '../../images/icons/express.png';





const SkillSection = () => {
    return (
        <>
        <Header>My Skills</Header>
            <SkillContainer>
                <SkillContent>
                    <SkillCard>
                        <img src={html} alt="htmlicon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={css} alt="cssicon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={js} alt="javascripticon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={jquery} alt="javascripticon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={react} alt="reacticon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={json} alt="jsonicon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={js} alt="javascripticon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={ajax} alt="ajaxicon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={nodejs} alt="nodejsicon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={mysql} alt="mysqlicon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={mongodb} alt="MongoDBicon" height={80} width={80}/>
                    </SkillCard>
                    <SkillCard>
                        <img src={express} alt="Expressicon" height={80} width={80}/>
                    </SkillCard>    
                </SkillContent>
            </SkillContainer>
        </>
    )
}

export default SkillSection
