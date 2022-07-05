import React from "react";
import { Button } from '@mui/material';

function BetControls({props}) {
  const multiplierDecorator = (data) => {
    if (props.multiplier) {
      return `${props.multiplier.toFixed(2)}x`
    } return props.multiplier
  }
    return <div className="BetControls">  
      <div id='BetControls'>
        BetControls Route
        <Button variant="contained" style={{backgroundColor: "rgb(188, 124, 210" }} onClick={(e)=> {console.log(props)}}>Bet</Button>
        <div id='multiplier'>{multiplierDecorator(props.multiplier)}</div>
        <div id='message'>{props.message}</div>
        </div>
    </div>;
  }
  
export default BetControls;