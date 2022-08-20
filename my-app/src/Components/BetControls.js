import React from "react";
import { Button, Input } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import TextField from '@mui/material/TextField';


function BetControls({props}) {
  const [name, setName] = React.useState('');
  const [payout, setPayout] = React.useState();

  const handleChange = (event) => {
    const onlyNums = event.target.value.replace(/[^0-9]/g, '');
    setName(onlyNums);
    if(!name) {
      setPayout(onlyNums*10);
    }
  }
  const handlePayoutChange = (event) => {
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
          <Button variant="contained" style={{backgroundColor: "rgb(188, 124, 210",  width:'100%', bottom:'0', maxHeight: '50px', minHeight: '50px'}} onClick={(e)=> {props.sendMessage(name)}}>Bet</Button>
        </div>
        
        </div>
    </div>;
  }
  
export default BetControls;