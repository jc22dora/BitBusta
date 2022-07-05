import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BitBusta from '../Assets/BitBusta.ico';
const Navbar = () => {
    return <div className="Navbar">  
      <div>
        <div></div>
            <div id='nav-logo-container' >
                <img id='bustabit-logo' src={BitBusta} alt="bustabit Logo"></img>
                <a class="bitbusta" id="PlayPage" href='/'>bitbusta</a>
            </div>
            <div id='nav-center-container' >
                <div>
                    <a id="PlayPage" href='/bankroll/overview'>
                        <i class="fas fa-university">
                        </i>BANKROLL</a>
                    <a id="PlayPage" href='/statistics'>
                    <i class="fas fa-chart-bar"></i>
                        STATS</a>
                    <a id="PlayPage" href='/leaderboard'>
                        <i class="fas fa-trophy">
                        </i>
                         LEADERBOARD</a>
                    <a id="PlayPage" href='/help'>
                    <FontAwesomeIcon icon="fas fa-question-circle" />
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