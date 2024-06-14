import { useState } from "react";
import trump from './assets/trump.png';
import biden from './assets/biden.png';
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
      console.log(response);
      const data = await response.json();
      setResponse(data);
  }; */}

  return (
    <>
    <h1>Presidentvalget i US and A</h1>
    {/*<button onClick={handlePost}>Post</button>*/}
    <TextField value={biden_votes} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    set_biden_votes(Number(event.target.value));
  }}>Hei</TextField>
  <TextField value={trump_votes} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    set_trump_votes(Number(event.target.value));
  }}>Hei</TextField>
    {/*<pre>{JSON.stringify(response, null, 2)}</pre>*/}
    <Stack direction="row">
          <img src={biden} className="logo" alt="Vite logo" />
          <div className="space"/>
          <img src={trump} className="logo" alt="React logo" />
      </Stack>
      <Stack direction="row">
      <Box sx={{"background-color": "#0027E8", "width": biden_percent, "textAlign": "left", "padding": "1em"}}><h1 className="votes">{biden_votes}</h1></Box>
      {/*<Box sx={{"background-color": "#ADADAD", "width": rest_percent, "padding": "1em"}}><h1 className="votes">{rest}</h1></Box>*/}
      <Box sx={{"background-color": "#FF003B", "width": trump_percent, "textAlign": "right", "padding": "1em"}}><h1 className="votes">{trump_votes}</h1></Box>
      
      </Stack>
    </>
  )
}

export default App
