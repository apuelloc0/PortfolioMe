import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faGithub, faHtml5, faInstagram, faJs, faLinkedin, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {


    return (
        <div className='About'>
            <div className="Logos-tech">
                <span>Tecnologias</span>
                <div className="Logos">
                    <FontAwesomeIcon icon={faHtml5} />
                    <FontAwesomeIcon icon={faCss3} />
                    <FontAwesomeIcon icon={faJs} />
                    <FontAwesomeIcon icon={faReact} />
                </div>
                <span>En proceso</span>
                <div className="Logos">
                    <FontAwesomeIcon icon={faNodeJs} />
                </div>
                <span>Herramientas</span>
                <div className="Logos">
                    <FontAwesomeIcon icon={faGit} />
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>

            <div className="AboutMe">
                <div className="Text">
                    <h2>Acerca de Mi</h2>
                    <p>  Me considero un desarrollador Web junior, actualmente enfocado en el area Frontend, aunque no cuento con experiencia laboral, tengo conocimientos solidos en HTML, CSS, JavaScript y React js; actualmente estudiando Next.js y Node.js. En constante aprendizaje y buscando oportunidades para colaborar en proyectos innovadores y desafiantes.</p>
                </div>
                <div className="SEE">

                    <span >Educacion</span>
                </div>


                <div className="Education">
                    <span>MinTic-2021 Universidad Autonoma de Bucaramanga</span>
                    <p>Tecnico Laboral en programacion enfocado en Desarrolllo de Aplicaciones Web</p>
                    <span>Platzi - 2022</span>
                    <p>Curso de HTML, CSS, JAVASCRIPT, REACT
                    </p>
                    <span>Autodidacta - 2022-2023</span>
                    <p>Desarrollo Web Frontend - NEXT JS - NODE JS
                    </p>
                </div>




            </div>
        </div>
    )
}

export default About
