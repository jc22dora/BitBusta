import React from "react";
import BetControls from "../Components/BetControls";
import BitRollChart from "../Components/BitRollChart";
import ChatBox from "../Components/ChatBox";
import Navbar from "../Components/Navbar";
import UserLedger from "../Components/UserLedger";
import "./PlayPage.css";
import "../Styles/UserLedger.css";
import io from 'socket.io-client';
import { useEffect, useState} from "react";
import { GAME_HEADER, GAME_ENDING_HEADER, GAME_INITITIALIZED_HEADER, GAME_STARTING_HEADER, NEW_MULTIPLIER_HEADER } from "../Interfaces/GamingHeaders.js";
const socket = io.connect("http://localhost:8079");
const PlayPage = () => {
  const [multiplier, setMultiplier] = useState(3);
  const [message, setMessage] = useState('');
  const sendMessage = () => {
  }
  useEffect(() => {
    socket.on(GAME_HEADER, (data) => {
      if(data.subheader === NEW_MULTIPLIER_HEADER) {
        setMessage('');
        setMultiplier(data.message);
      }
      if(data.subheader === GAME_ENDING_HEADER) {
        setMessage(data.message);
        setMultiplier(false);
      }
      if(data.subheader === GAME_INITITIALIZED_HEADER) {
        setMessage(data.message);
      }
      if(data.subheader === GAME_STARTING_HEADER) {
        setMessage(data.message);
      }
    })
  }, [socket])
  return (
    <div className="PlayPage">
      <Navbar></Navbar>
        <div id="grid-container">
            <div id="left-side">
                <BetControls props={{multiplier, sendMessage, message}}></BetControls>
                <BitRollChart></BitRollChart>
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
