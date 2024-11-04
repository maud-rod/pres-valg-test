import trump from './Trump.png';
import biden from './Harris.png';
import './App.css';
import'../src/components/Valgomat.css';
import { Box, Stack } from "@mui/system";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Valgomat from './components/Valgomat';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';

function App() {

  const biden_votes = 257
  const trump_votes = 281

  const wisconsin = 10;
  const michigan = 15;
  const nevada = 6;
  const pennsylvania = 19;
  const north_carolina = 16;
  const georgia = 16;
  const arizona = 11;
  const minnesota = 10;
  const neb2dist = 1;
  const virginia = 13;
  const new_hampshire = 4;
  const new_mex = 5;
  const maine = 2;
  const colorado = 10;

  let harris_states = [wisconsin, michigan, nevada, minnesota, new_hampshire, neb2dist, virginia, new_mex, maine, colorado]

  let trump_states = [pennsylvania, north_carolina, georgia, arizona]

  console.log(harris_states, trump_states)

  let harris_mandates = 181

  harris_states.forEach( num => {
    harris_mandates += num;
  })

  let trump_mandates = 219

  trump_states.forEach( num => {
    trump_mandates += num;
  })

  console.log(trump_mandates, harris_mandates)

  // 404 utenom det


  // let rest_percent = rest.toString()+"%";
  const totalVotes = 538
  let trump_percent = (100*(trump_votes/totalVotes)).toString()+"%"
  let biden_percent = (100*(biden_votes/totalVotes)).toString()+"%";

  let trump_overweight = (100*(269-biden_votes)/(totalVotes)).toString()+"%";
  let kamala_overweight = (100*(269 - trump_votes)/(totalVotes)).toString()+"%";

  console.log(biden_percent, trump_percent, trump_overweight, kamala_overweight)

  const [openTooltip, setOpenTooltipValue] = useState(false);

  const toggleClick = (bool: boolean) => {
    setOpenTooltipValue(bool);
  };

  {/* const [response, setResponse] = useState(null);

  const handlePost = async () => {
      const response = await fetch('./api/some-endpoint?name=Maud');
      if (!response.ok) {
        console.log("baluba")
        throw new Error(response.statusText);
      }
      console.log(response);ss
      const data = await response.json();
      setResponse(data);
  }; */}

  const h = 120;
  const w = 1.86*h;

  const defaultPage = (
    <Stack direction="column" width="480px">
    <Stack direction="row" width="100%">
        <img src={biden} alt="Harris" height={`${h}px`} width={`${w}px`}/>
        <div className="space"/>
        <img src={trump} alt="Trump" height={`${h}px`} width={`${w}px`}/>
      </Stack>
      <Stack direction="row" alignItems="center" width="100%">
      <Box sx={{"background-color": "#0027E8", "width": biden_percent, "textAlign": "left", "height": "15px", "padding": "1em", "justifyItems": "center"}}><h2 className="votes" style={{"marginTop": "-12px"}}>{biden_votes}</h2></Box>
      <Box sx={{"background-color": "#FF003B", "width": trump_overweight,"borderRight": "solid 2px black", "height": "47px"}} />
      <Box sx={{"background-color": "#FF003B", "height": "15px","width": "50%", "textAlign": "right", "padding": "1em", "alignItems": "center"}}><h2 className="votes" style={{"marginTop": "-12px"}}>{trump_votes}</h2></Box>



</Stack><Tooltip
      onClose={() => toggleClick(false)}
      open={openTooltip}
      title={<h4>Mandatene i hver stat tildeles kandidaten med høyeste snitt i FiveThirtyEights snitt av målinger.</h4>}
      arrow
      PopperProps={{
        disablePortal: true
      }}
      disableFocusListener
      disableTouchListener
    >
      <InfoIcon
        style={{ width: 20, height: 20, padding: 20 }}
        onClick={() => toggleClick(true)}
        color="primary"
      >Info</InfoIcon>
    </Tooltip></Stack>)

  return (
    <Router>
      <Routes>
        <Route path="/" element={defaultPage} />
        <Route path="/valgomat" element={<Valgomat/>}/>
      </Routes>
    
      </Router>
  )
}

export default App