import React from 'react'
import "./Contact.css";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {

    return (
        <div className='Contact'>
            <div className="Contact-flex">
                <div className="Contact-info">
                    <h2>Contacto</h2>
                    <div className="Contact-Icon">
                        <FontAwesomeIcon icon={faMailBulk} />
                        <span>andresfpuello16@gmail.com</span>
                    </div>
                    <div className="Contact-Icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span>Andres Felipe Puello</span>
                    </div>
                    <div className="Contact-Icon">
                        <FontAwesomeIcon icon={faGithub} />
                        <span>apuelloc00</span>
                    </div>
                </div>

                <form action="https://formsubmit.co/andresfpuello16@gmail.com" method="POST" className="Contact-form">
                    <input type="text" name="Nombre" placeholder='Your Name' />
                    <input type="email" name="Correo" placeholder='Your Email' />
                    <textarea type="text" name="Mensaje" placeholder='Your Message' />
                    <input type="submit" placeholder='' value="Enviar" />

                    <input type="hidden" name="_next" value='http://localhost:5173/' />
                    <input type="hidden" name="_captcha" value='false' />
                </form>
            </div>
        </div>
    )
}

export default Contact
