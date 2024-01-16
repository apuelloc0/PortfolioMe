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

                        <Link to={`https://apuelloc0.github.io/Ecommerce/`} target="_blank">
                            <div className="layer">
                                <h3>Ecommerce HTML CSS JS</h3>
                                <p>Aplicacion Web interactiva y dinamica desarrollada con HTML, CSS Y JavaScript</p>
                            </div>
                        </Link>

                    </div>

                    <div className="Proyect">
                        <img src={rickmorty} alt="" />
                        <Link to={`https://apuelloc0.github.io/AsyncProyect/`} target="_blank">
                            <div className="layer">
                                <h3>Asyng Page Rick And Morty</h3>
                                <p>App que muestra personajes de Rick and Morty mediante peticiones a una API.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="Proyect">
                        <img src={calculadora} alt="" />
                        <Link to={`https://apuelloc0.github.io/calculadora/`} target="_blank">
                            <div className="layer">
                                <h3>Calculadora</h3>
                                <p>Calculadora basica para realizar operaciones simples.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="Proyect">
                        <img src={movies} alt="" />
                        <Link to={`https://apuelloc0.github.io/AsyncProyect/`} target="_blank">
                            <div className="layer">
                                <h3>Landing Asyng Page</h3>
                                <p>App que muestra las Movies favoritas del usuario</p>
                            </div>
                        </Link>
                    </div>
                    <div className="Proyect">
                        <img src={reactshop} alt="" />
                        <Link to={`https://lucent-cucurucho-607e26.netlify.app/`} target="_blank">
                            <div className="layer">
                                <h3>App Movies</h3>
                                <p>App que ofrece productos basicos, accesorios, tecnología y más </p>
                            </div>
                        </Link>
                    </div>
                    <div className="Proyect">
                        <img src={plumbers} alt="" />
                        <Link to={`https://plumbing-service.onrender.com/`} target="_blank">
                            <div className="layer">
                                <h3>Landing Page Plumbers</h3>
                                <p>Pagina Web de una empresa de Plomeria de USA</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
