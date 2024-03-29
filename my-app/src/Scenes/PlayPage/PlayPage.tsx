import React from "react";
import BetControls from "../../Components/BetControls/BetControls";
import BitRollChart from "../../Components/BitRollChart/BitRollChart";
import ChatBox from "../../Components/ChatBox/ChatBox";
import Navbar from "../../Components/Navbar/Navbar";
import UserLedger from "../../Components/UserLedger/UserLedger";
import "./PlayPage.css";
import io from 'socket.io-client';
import { useEffect, useState} from "react";
import { GAME_HEADER, GAME_ENDING_HEADER, GAME_INITITIALIZED_HEADER, GAME_STARTING_HEADER, NEW_MULTIPLIER_HEADER, BET_RESPONSE, BET_BUTTON } from "../../Interfaces/GamingHeaders/GamingHeaders";
import {sendBet} from '../../Services/SendBet/SendBet'
const socket = io("http://localhost:8079");
const PlayPage = () => {
  const [multiplier, setMultiplier] = useState(false);
  const [message, setMessage] = useState('');
  const [betButtonMessage, setBetButtonMessage] = useState(BET_BUTTON)
  const [betAbility, setBetAbility] = useState(true);
  const emitBet = (bet: number) => {
    sendBet(socket, bet);
  }
  useEffect(() => {
    socket.on(GAME_HEADER, (data: any) => {
      if(data.subheader === NEW_MULTIPLIER_HEADER) {
        setMessage(''); 
        setMultiplier(data.message);
      }
      if(data.subheader === GAME_ENDING_HEADER) {
        setMultiplier(false);
        setMessage(data.message);
        setBetAbility(true);
        setBetButtonMessage(BET_BUTTON);
      }
      if(data.subheader === GAME_INITITIALIZED_HEADER) {
        setMessage(data.message);
      }
      if(data.subheader === GAME_STARTING_HEADER) {
        setMessage(data.message);
      }
    })
    socket.on(BET_RESPONSE, (data: any) => {
      if(data.status === false) {
        setBetButtonMessage(data.message);
      } else{

      }
    })
  }, [socket])
  return (
    <div className="PlayPage">
      <Navbar></Navbar>
        <div id="grid-container">
            <div id="left-side">
                <BitRollChart props={{multiplier, message}}></BitRollChart>
                <BetControls sendBet={emitBet} betButtonMessage={betButtonMessage} betAbility={betAbility} setBetAbility={setBetAbility}></BetControls> 
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
