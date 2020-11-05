import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [active, setActive] = useState('') /*vai aparecer no active logo a baixo*/

    useEffect(() =>{
        let currentURL = window.location.href
        console.log(currentURL);
        if(currentURL.endsWith('/'))
            setActive('Sobre');
        else if (currentURL.endsWith('/Projetos'))
            setActive('Projetos')
        else if (currentURL.endsWith('/Resumo'))
            setActive('Resumo')
    }, [active])
    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>

            <div className="navbar__items"> {/* aqui eles vao aparecer em um lugar separadamente */}
                {active !== 'Sobre' && 
                    <Link to="/">
                        <div className="navbar__item" onClick={() => setActive('Sobre')}>Sobre</div>

                    </Link>
                }
                {active !== 'Resumo' ?
                    <Link to="/Resumo">
                        <div className="navbar__item" onClick={() => setActive('Resumo')}>Resumo</div>
                    </Link> : null
                }

                {active !== 'Projetos' &&
                    <Link to="/Projetos">
                        <div className="navbar__item" onClick={() => setActive('Projetos')}>Projetos</div>

                    </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;