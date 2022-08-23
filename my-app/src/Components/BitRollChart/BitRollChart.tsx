import React from "react";
export interface BitRollChartProps {
    
}

const BitRollChart = ({props}:any) => {
  const multiplierDecorator = (data:any) => {
    if (props.multiplier) {
      return `${props.multiplier}x`
    } return props.multiplier
  }
    return <div className="BitRollChart">  
      <div id='BitRollChart'>
      <div className="br-vals" id='br-multiplier'>{multiplierDecorator(props.multiplier)}</div>
        <div className="br-vals" id='br-message'>{props.message}</div>
        </div>
      
    </div>;
  }
  
export default BitRollChart;