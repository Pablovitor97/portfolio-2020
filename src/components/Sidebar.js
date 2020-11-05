import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.JPG'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:pablovitorino3@gmail.com.com") //enviar email
    }
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Bem vindo ao meu <span>Portifolio</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="#"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/pablovitorinoa_/"><img src={instagram} alt="instagram" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/Pablovitor97"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__item sidebar__linkedin">
                    <a href="https://www.linkedin.com/in/pablo-vitorino-de-araujo-559990191/"><img src={linkedin} alt="github" className="sidebar__icon mr-3" />LinkeInd</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Vitória ES, Brasil</div>
                <div className="sidebar__item">pablovitorino3@gmail.com</div>
                <div className="sidebar__item">55 27 999918276</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Me mande um email</div>
        </div>
    )
}

export default Sidebar;


