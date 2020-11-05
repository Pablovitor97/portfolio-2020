import React from 'react';
import api from '../assets/icons/api.svg'
import backend from '../assets/icons/backend.svg'
import algo from '../assets/icons/algo.svg'
import computer from '../assets/icons/computer.svg'
import repair from '../assets/icons/repair.svg'
import puzzle from '../assets/icons/puzzle.svg'

import Skillcard from './Skillcard';

const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "Posso criar SPA usando HTML, CSS and React.js"
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "Crio interfaces de usuario usando o FIGMA"
    },
]


const About = () => {
    return (
        <div className="about">
            <h6 className="about__intro">
                Eu me descreveria como uma pessoa esforçada e bastante dedicada, sempre tentando manter o foco, mente aberta e criativo.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">O que eu ofereço</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default About;