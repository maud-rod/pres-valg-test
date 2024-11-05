import trump from '../Trump.png';
import { USMap } from './USmap.tsx';
import harris from '../Harris.png';
import '../App.css';
import { Box, Stack } from "@mui/system";
import { FormControlLabel, FormGroup, Switch, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PredictedResults from './PredictedResult.tsx';
import { useSearchParams } from 'react-router-dom';

function ActualResults() {

    const [isMobile, setIsMobile] = useState(false);

    const getIsMobile = (userAgent: string) =>
    !!userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );

    useEffect(() => {
        setIsMobile(getIsMobile(navigator.userAgent));
    }, []);

    const [searchParams, _] = useSearchParams();
    let forside = searchParams.get("forside") === "true";

    /*
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

  let harris_states = [wisconsin,michigan, nevada, minnesota, new_hampshire, neb2dist, virginia, new_mex, maine, colorado]

  let trump_states = [pennsylvania, north_carolina, georgia, arizona]
  */

  let harris_mandates = 0

  /*
  harris_states.forEach( num => {
    harris_mandates += num;
  })
  */ 

  let trump_mandates = 0

  /*
  trump_states.forEach( num => {
    trump_mandates += num;
  }) */

  // 404 utenom det


  // let rest_percent = rest.toString()+"%";
  const totalVotes = 538
  let trump_percent = (100*(trump_mandates/totalVotes)).toString()+"%"
  let harris_percent = (100*(harris_mandates/totalVotes)).toString()+"%";

  let nonTrumpArea = Math.min(269, totalVotes-trump_mandates)
  let greyAreaharris = (nonTrumpArea-harris_mandates)/totalVotes
  let nonHarrisArea = Math.min(269, totalVotes-harris_mandates)
  let greyAreaTrump = (nonHarrisArea-trump_mandates)/totalVotes

  let greyharrisPercent = greyAreaharris > 0 ? (100*greyAreaharris).toString()+"%" : "0%"
  let greyTrumpPercent = greyAreaTrump > 0 ? (100*greyAreaTrump).toString()+"%" : "0%"


  let trump_overweight = (trump_mandates-269)/(totalVotes)
  let harris_overweight = (harris_mandates - 269)/(totalVotes)

  let trump_overweight_percent = trump_overweight > 0 ? (100*(trump_overweight)).toString()+"%" : "0%";
  let harris_overweight_percent =  harris_overweight > 0 ? (100*(harris_overweight)).toString()+"%" : "0%";

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

  const [predicted, setPredicted] = useState(false);

  const h = isMobile ? 80 : 140;
  const w = 1.86*h;
  const boxWidth = isMobile ? "380px": "700px"

  const borderHarrisGrey = trump_overweight > 0 ? "none" : "solid 2px white";

  const harrisPercent = harris_overweight > 0 ? "50%" : harris_percent

  const defaultPage = (
    <Stack direction="column" width={boxWidth}>
    {predicted ? <PredictedResults isMobile={isMobile}/> : <><Stack direction="row" width="100%">
        <img src={harris} alt="Harris" height={`${h}px`} width={`${w}px`}/>
        <div className="space"/>
        <img src={trump} alt="Trump" height={`${h}px`} width={`${w}px`}/>
      </Stack>
      <Stack direction="row" alignItems="center" width="100%">
      <Box sx={{"background-color": (harris_mandates < 1) ? "#AAAAAA" : "#0027E8", "width": (harris_mandates > 30) ? harrisPercent : "undefined", "textAlign": "left", "height": "15px", "padding": "1em", "justifyItems": "center"}}><h2 className="votes" style={{"marginTop": "-12px"}}>{harris_mandates}</h2></Box>
      <Box sx={{"background-color": "#AAAAAA", "width": greyharrisPercent, "height": "47px", borderRight: borderHarrisGrey}} />
      {trump_overweight > 0 && <Box sx={{"background-color": "#FF003B", "width": trump_overweight_percent,"borderRight": "solid 2px white", "height": "47px"}} />}
      {harris_overweight > 0 && <Box sx={{"background-color": "#0027E8", "width": harris_overweight_percent,"borderLeft": "solid 2px white", "height": "47px"}} />}
      <Box sx={{"background-color": "#AAAAAA", "width": greyTrumpPercent, "height": "47px"}} />
      {/*<Box sx={{"background-color": "#FF003B", "width": trump_overweight,"borderRight": "solid 2px black", "height": "47px"}} />*/}
      <Box sx={{"background-color": (trump_mandates < 1) ? "#AAAAAA" : "#FF003B", "height": "15px","width": (trump_mandates > 30) ? trump_percent : "undefined", "textAlign": "right", "padding": "1em", "alignItems": "center"}}><h2 className="votes" style={{"marginTop": "-12px"}}>{trump_mandates}</h2></Box>
    </Stack>
    

    <USMap predicted={predicted} isMobile={isMobile}/></>}

    {forside &&
    (<Stack direction="column"><Stack direction="row" alignItems="center" spacing={2}>
        <FormGroup>
    <FormControlLabel control={<Switch defaultChecked={false} onChange={() => setPredicted(prev=>!prev)}/>} label={
    <Typography sx={{"font-family": "var(--brick-fonts-baseHeadlineS)", "color": "gray"}}> Vis forventede resultater </Typography> } />
    </FormGroup>

    <Typography sx={{"font-family": "var(--brick-fonts-baseHeadlineS)", "color": "gray"}}> Sist oppdatert 5. november, 21:19</Typography> 
    </Stack> 
    <Typography sx={{"font-family": "var(--brick-fonts-baseHeadlineS)", "color": "gray"}}> Tallgrunnlag fra <a href="https://apnews.com/projects/election-results-2024/">AP News</a> </Typography>

    </Stack>)
    }
    
    </Stack>)

  return defaultPage

  
}

export default ActualResults;