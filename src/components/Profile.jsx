import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Profile.css"
import yo from "../images/andresyo.webp";
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
  return (
    <div className='Profile'>
      <div className="Profile-Name">
        <div className="Name">
          <h2>Desarrollo Web Frontend</h2>
          <h1>Andres Puello</h1>
        </div>

        <div className="Icons-container">
          <div className="Icons">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>

      <div className="Profile-me">
        <img src={yo} alt="" />
      </div>
    </div>
  )
}

export default Profile
