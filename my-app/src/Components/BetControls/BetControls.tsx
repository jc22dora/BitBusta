import React, { useState } from "react";
import { Button} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import './BetControls.css'

export interface BetControlsProps {
    sendBet: (bet:number) => any,
    betButtonMessage: string,
    betAbility: boolean,
    setBetAbility: any,
}
function BetControls(props: BetControlsProps) {
  const [bet, setBet] = useState(1);
  const [payout, setPayout] = useState(1);

  const handleChange = (event: any) => {
    const onlyNums = event.target.value.replace(/[^0-9]/g, '');
    setBet(onlyNums);
    if(!bet) {
      setPayout(onlyNums);
    }
  }
  const handlePayoutChange = (event: any) => {
    const onlyNums = event.target.value.replace(/[^0-9]/g, '');
    setPayout(onlyNums)
  }
  const handleSendBet = (bet: number) => {
    props.sendBet(bet);
    props.setBetAbility(false);
  }
    return <div className="BetControls">  
      <div id='BetControls'>
        <div id="betinput">
          <FormControl variant="filled" style={{ width:'100%', borderWidth:'10px'}}>
            <TextField label="Bet"  type="number" onChange={handleChange}/>
            <InputLabel htmlFor="component-filled" ></InputLabel>
          </FormControl>
          <FormControl variant="filled" style={{ width:'100%', borderWidth:'10px'}}>
            <TextField label="Payout"  type="number" onChange={handlePayoutChange} value={payout}/>
            <InputLabel htmlFor="component-filled" ></InputLabel>
          </FormControl>
          </div>
        
        <div id="betbutton">
          <Button variant="contained" style={{
            backgroundColor: props.betAbility?"rgb(188, 124, 210)" :"rgb(0, 0, 0)",  
            width:'100%', bottom:'0', 
            maxHeight: '50px', 
            minHeight: '50px'
            }} onClick={(e)=> {handleSendBet(bet)}}>{props.betButtonMessage}</Button>
        </div>
        </div>
    </div>;
  }
  
export default BetControls;