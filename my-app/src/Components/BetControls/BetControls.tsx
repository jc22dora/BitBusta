import React from "react";
import { Button, Input } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import TextField from '@mui/material/TextField';

export interface BetControlsProps {
    sendBet: (bet:number) => any,
}


function BetControls(props: BetControlsProps) {
  const [bet, setBet] = React.useState(1);
  const [payout, setPayout] = React.useState(1);

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
            backgroundColor: "rgb(188, 124, 210",  
            width:'100%', bottom:'0', 
            maxHeight: '50px', 
            minHeight: '50px'
            }} onClick={(e)=> {props.sendBet(bet)}}>Bet</Button>
        </div>
        
        </div>
    </div>;
  }
  
export default BetControls;