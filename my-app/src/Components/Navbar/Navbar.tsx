import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BitBusta from '../../Assets/BitBusta.ico';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import './NavBar.css';  

const icon = "fas fa-question-circle" as IconProp;

const Navbar = () => {
    return <div className="Navbar">   
      <div>
        <div></div>
            <div id='nav-logo-container' >
                <img id='bustabit-logo' src={BitBusta} alt="bustabit Logo"></img>
                <a className="bitbusta" id="PlayPage" href='/'>bitbusta</a>
            </div>
            <div id='nav-center-container' >
                <div>
                    <a id="PlayPage" href='/bankroll/overview'>
                        <i className="fas fa-university">
                        </i>BANKROLL</a>
                    <a id="PlayPage" href='/statistics'>
                    <i className="fas fa-chart-bar"></i>
                        STATS</a>
                    <a id="PlayPage" href='/leaderboard'>
                        <i className="fas fa-trophy">
                        </i>
                         LEADERBOARD</a>
                    <a id="PlayPage" href='/help'>
                    <FontAwesomeIcon icon={icon} />
                         HELP</a>
                </div>
            </div>
            <div id='nav-right-container'>
                <a id="PlayPage" href='/login'>LOGIN</a>
                <a id="PlayPage" href='/register'>REGISTER</a>
            </div>
            
      </div>
    </div>;
  }
  
export default Navbar;