import { useState } from "react";
import trump from './Trump.png';
import biden from './Harris.png';
import './App.css';
import { Box, Stack } from "@mui/system";
import { TextField } from "@mui/material";

function App() {

  const [biden_votes, set_biden_votes] = useState(333);
  const [trump_votes, set_trump_votes] = useState(201);

  // let rest_percent = rest.toString()+"%";
  let trump_percent = trump_votes.toString()+"%";
  let biden_percent = biden_votes.toString()+"%";

  {/* const [response, setResponse] = useState(null);

  const handlePost = async () => {
      const response = await fetch('./api/some-endpoint?name=Maud');
      if (!response.ok) {
        console.log("baluba")
        throw new Error(response.statusText);
      }
      console.log(response);s
      const data = await response.json();
      setResponse(data);
  }; */}

  return (
    <>
    {/*<div className="maud">
    <brick-button-v7
      data-version="primary"
      data-label="My awesome button">
    </brick-button-v7>
    </div>
    <brick-input-v1
    data-id="firstname"
    data-label-text="Firstname"
    data-label-hidden="true"
    data-required="true"
    data-type="text"
  ></brick-input-v1> */}
    {/*<button onClick={handlePost}>Post</button>*/}
    <h6></h6>
    {/*<pre>{JSON.stringify(response, null, 2)}</pre>*/}
    <Stack direction="row">
          <img src={biden} className="logo" alt="Harris" />
          <div className="space"/>
          <img src={trump} className="logo" alt="Trump" />
      </Stack>
      <Stack direction="row">
      <Box sx={{"background-color": "#0027E8", "width": biden_percent, "textAlign": "left", "padding": "1em", "justifyItems": "center"}}><h2 className="votes">{biden_votes}</h2></Box>
      {/*<Box sx={{"background-color": "#ADADAD", "width": rest_percent, "padding": "1em"}}><h1 className="votes">{rest}</h1></Box>*/}
      <Box sx={{"background-color": "#FF003B", "width": trump_percent, "textAlign": "right", "padding": "1em"}}><h2 className="votes">{trump_votes}</h2></Box>
      
      </Stack>
    </>
  )
}

export default App