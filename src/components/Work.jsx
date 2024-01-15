import React from 'react'
import "./Work.css";
import ecommerce from "../images/Ecommerce.png";
import rickmorty from "../images/rickmorty.png";
import calculadora from "../images/calculadora.png";
import movies from "../images/appmovies.png";
import reactshop from "../images/reactshop.png";
import plumbers from "../images/plumber.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faGithub, faHtml5, faInstagram, faJs, faLinkedin, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Work = () => {
    return (
        <div className='Work'>
            <h2 className='Work-title'>Proyectos</h2>
            <div className="WW">
                <div className="Work-Proyects">
                    <div className="Proyect">
                        <img src={ecommerce} alt="" />
                        <div className="layer">
                            <h3>Ecommerce HTML CSS JS</h3>
                            <p>The app connects you y the talented people around the world.</p>
                            <Link to={`https://apuelloc0.github.io/Ecommerce/`} target="_blank">                    <FontAwesomeIcon icon={faHtml5} />
                            </Link>
                        </div>
                    </div>

                    <div className="Proyect">
                        <img src={rickmorty} alt="" />
                        <div className="layer">
                            <h3>Landing Asyng Page</h3>
                            <p>The app connects you y the talented people around the world.</p>
                            <Link to={`https://apuelloc0.github.io/AsyncProyect/`} target="_blank">Icono</Link>
                        </div>
                    </div>
                    <div className="Proyect">
                        <img src={calculadora} alt="" />
                        <div className="layer">
                            <h3>Calculadora</h3>
                            <p>The app connects you y the talented people around the world.</p>
                            <Link to={`https://apuelloc0.github.io/calculadora/`} target="_blank">Icono</Link>
                        </div>
                    </div>
                    <div className="Proyect">
                        <img src={movies} alt="" />
                        <div className="layer">
                            <h3>Landing Asyng Page</h3>
                            <p>The app connects you y the talented people around the world.</p>
                            <Link to={`https://apuelloc0.github.io/AsyncProyect/`} target="_blank">Icono</Link>
                        </div>
                    </div>
                    <div className="Proyect">
                        <img src={reactshop} alt="" />
                        <div className="layer">
                            <h3>App Movies</h3>
                            <p>The app connects you y the talented people around the world.</p>
                            <Link to={`https://lucent-cucurucho-607e26.netlify.app/`} target="_blank">Icono</Link>
                        </div>
                    </div>
                    <div className="Proyect">
                        <img src={plumbers} alt="" />
                        <div className="layer">
                            <h3>Landing Page Plumbers</h3>
                            <p>The app connects you y the talented people around the world.</p>
                            <Link to={`https://plumbing-service.onrender.com/`} target="_blank">Icono</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
