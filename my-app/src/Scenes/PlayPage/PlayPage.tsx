import React from "react";
import BetControls from "../../Components/BetControls/BetControls";
import BitRollChart from "../../Components/BitRollChart/BitRollChart";
import ChatBox from "../../Components/ChatBox/ChatBox";
import Navbar from "../../Components/Navbar/Navbar";
import UserLedger from "../../Components/UserLedger/UserLedger";
import "./PlayPage.css";
import "../../Styles/UserLedger.css";
import io from 'socket.io-client';
import { useEffect, useState} from "react";
import { GAME_HEADER, GAME_ENDING_HEADER, GAME_INITITIALIZED_HEADER, GAME_STARTING_HEADER, NEW_MULTIPLIER_HEADER } from "../../Interfaces/GamingHeaders.js";
import {sendBet} from '../../Services/SendBet'
const socket = io("http://localhost:8079");
const PlayPage = () => {
  const [multiplier, setMultiplier] = useState(false);
  const [message, setMessage] = useState('');
  const emitBet = (bet: number) => {
    //let resp = await postBet(bet);
    sendBet(socket, bet);
  }
  // <BetControls props={{sendBet}}></BetControls>
  useEffect(() => {
    socket.on(GAME_HEADER, (data) => {
      if(data.subheader === NEW_MULTIPLIER_HEADER) {
        setMessage(''); 
        setMultiplier(data.message);
      }
      if(data.subheader === GAME_ENDING_HEADER) {
        setMultiplier(false);
        setMessage(data.message);
      }
      if(data.subheader === GAME_INITITIALIZED_HEADER) {
        setMessage(data.message);
      }
      if(data.subheader === GAME_STARTING_HEADER) {
        setMessage(data.message);
      }
    })
    socket.on('BET', (data) => {
      if(data.status) {

      } else{
        alert(data.message);
      }
      alert(data.message);
    })
  }, [socket])
  return (
    <div className="PlayPage">
      <Navbar></Navbar>
        <div id="grid-container">
            <div id="left-side">
                <BitRollChart props={{multiplier, message}}></BitRollChart>
                <BetControls sendBet={emitBet}></BetControls> 
                <ChatBox></ChatBox>
    </div>
            <div id="right-side">
                <UserLedger></UserLedger>
            </div>
        </div> 
    </div>
  );
};

export default PlayPage;
