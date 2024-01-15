import "./Header.css";
import { Link } from 'react-router-dom';
import logo from "../images/rym.svg";

const Header = () => {



    return (
        <div className="Header">

            <div className="Header-img">
                <img src={logo} alt="" />
            </div>

            <div className="Header-List">
                <ul>
                    <li className="btnlist">Home</li>
                    <li className="btnlist">About</li>
                    {/* <li className="btnlist">My Work</li> */}
                    <li className="btnlist">Proyects</li>
                    <li className="btnlist">Certificates</li>
                    <li className="btnlist">Contact</li>
                    <i id="close" className="fas fa-times"></i>
                </ul>
                <i id="bars" className="fas fa-bars"></i>
            </div>

        </div>
    )
}

export default Header





