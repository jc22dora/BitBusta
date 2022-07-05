import React from "react";
import { Button } from '@mui/material';
import BitBusta from '../Assets/BitBusta.ico';
import SocialAndRealTime from '../Assets/fd7d83879bdc0258ab637867faf48168.png';
import ProvablyFair from '../Assets/af565435543d38f5534cb9c5124531dc.png';
import Bankroll from '../Assets/2e83c6a30845a277c701d2bca8113147.png';
import './LandingPages.css';

const LandingPage = () => {
    return <div className="LandingPage">  
      <h3 id='LandingPageHeader'>THE CLONED CRASH GAME</h3>
      <div id='bustabit-logo-container'>
        <img id='bustabit-logo' src={BitBusta} alt="bustabit Logo"></img>
        <h1 id='bustabit-logo-title'>bitbusta</h1>
      </div>
      <div id='button-container'>
        <Button href="/play" variant="contained" style={{backgroundColor: "rgb(188, 124, 210" }} fullWidth='true'>Play Now</Button>
      </div>
      
      <div id='landingpage-chips'>
        <div id='chips-container'>
            <h4>Social & Real Time</h4>
            <img src={SocialAndRealTime} id='chips' alt="Social and Real Time Game"></img>
        </div>
        <div id='chips-container'>
            <h4>Provably Fair</h4>
            <img src={ProvablyFair} id='chips' alt="Provably Fair"></img> 
        </div>
        <div id='chips-container'>
            <h4>Be the Bankroll</h4>
            <img src={Bankroll} id='chips'   alt="Bankroll"></img>
        </div> 
      </div>
      
    </div>;
  }
  
export default LandingPage; 