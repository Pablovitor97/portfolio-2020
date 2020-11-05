import React from 'react';
import react from '../assets/icons/react.svg'
import python from '../assets/icons/python.svg'
import Bar from './Bar';

const languages = [
    {
        icon: python,
        name: 'JS',
        level: '40'
    },
    {
        icon: react,
        name: 'css',
        level: '70'
    },
    {
        icon: react,
        name: 'HTML',
        level: '80'
    },
    {
        icon: react,
        name: 'react',
        level: '60'
    },
    {
        icon: react,
        name: 'Bootstrap',
        level: '80'
    }
]

const tools = [
    {
        icon: react,
        name: 'Figma',
        level: '85'
    },
    {
        icon: react,
        name: 'canva',
        level: '85'
    },
    {
        icon: react,
        name: 'Photoshop',
        level: '40'
    }

    

]


const Resume = () => {
    return (
        <div className="container resume">
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Desenvolvimento de Sistemas
                        </h5>
                        <p className="resume-card__name">
                            SENAI (2019-2020)
                        </p>
                        <p className="resume-card__details">Atualmente procuro emprego na area de UI/UX designer</p>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experiencia
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Auxiliar administrativo
                        </h5>
                        <p className="resume-card__name">
                            BrMalls (2015-2016)
                        </p>
                        <p className="resume-card__details">Trabalhei como auxiliar administrativo, ajudando nas Análises de vendas e alimentação do banco de dados.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        Tools and Softwares
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;