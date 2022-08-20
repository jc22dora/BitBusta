import React from "react";
const BitRollChart = ({props}) => {
  const multiplierDecorator = (data) => {
    if (props.multiplier) {
      return `${props.multiplier}x`
    } return props.multiplier
  }
    return <div className="BitRollChart">  
      <div id='BitRollChart'>
      <div id='multiplier'>{multiplierDecorator(props.multiplier)}</div>
        <div id='message'>{props.message}</div>
        </div>
      
    </div>;
  }
  
export default BitRollChart;