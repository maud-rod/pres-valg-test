import trump from '../Trump.png';
import { USMap } from './USmap.tsx';
import harris from '../Harris.png';
import '../App.css';
import { Box, Stack } from "@mui/system";
import { Typography } from '@mui/material';
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

    let isForside = forside;

    const California = 54;

    const Texas = 40;

    const Florida = 30;

    const New_York = 28;

    const Illinois = 19;

    // const Pennsylvania = 19;

    const Ohio = 17;

    const Georgia = 16;

    const North_Carolina = 16;

    // const Michigan = 15;

    const New_Jersey = 14;

    const Virginia = 13;

    const Washington = 12;

    // const Arizona = 11;

    const Indiana = 11;

    const Massachusetts = 11;

    const Tennessee = 11;

    const Colorado = 10;

    const Maryland = 10;

    // const Minnesota = 10;

    const Missouri = 10;

    // const Wisconsin = 10;

    const Alabama = 9;
    const South_Carolina = 9;
    const Kentucky = 8;
    const Louisiana = 8;
    const Oregon = 8;
    const Connecticut = 7;
    const Oklahoma = 7;
    const Arkansas = 6;
    const Iowa = 6;
    const Kansas = 6;
    const Mississippi = 6;
    // const Nevada = 6;
    const Utah = 6;
    const Nebraska = 2;
    const Nebraska_3 = 1;
    const Nebraska_2 = 1;
    const Nebraska_1 = 1;
    const New_Mexico = 5;
    const Hawaii = 4;
    const Idaho = 4;
    // const Maine = 2;
    const Maine_dist = 1;
    // const Maine_dist2 = 1;
    const Montana = 4;
    // const New_Hampshire = 4;
    const Rhode_Island = 4;
    const West_Virginia = 4;
    // const Alaska = 3;
    const Delaware = 3;
    const DC = 3;
    const North_Dakota = 3;
    const South_Dakota = 3;
    const Vermont = 3;
    const Wyoming = 3;

  let harris_states = [Nebraska_2, Hawaii, Virginia, New_Mexico, Oregon, California, Washington, Maine_dist, DC, Vermont, Colorado, New_York, Massachusetts, Connecticut, Rhode_Island, New_Jersey, Delaware, Maryland, Illinois]

  let trump_states = [Nebraska_1, Georgia, North_Carolina, Idaho, Iowa, Kansas, Texas, Utah, Montana, Ohio, Florida, Alabama, Mississippi, Missouri, Louisiana, Arkansas, Oklahoma, Tennessee, Kentucky, South_Carolina, Indiana, Wyoming, North_Dakota, South_Dakota, Nebraska, Nebraska_3, West_Virginia, ]

  let harris_mandates = 0

  harris_states.forEach( num => {
    harris_mandates += num;
  })

  let trump_mandates = 0

  trump_states.forEach( num => {
    trump_mandates += num;
  })

  console.log(harris_mandates, trump_mandates)


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

  const predicted = false;

  const h = isMobile ? 70 : 140;
  const w = 1.86*h;
  const boxWidth = isMobile ? "340px": (isForside ? "700px" : "540px");

  const borderHarrisGrey = trump_overweight > 0 ? "none" : "solid 2px white";

  const harrisPercent = harris_overweight > 0 ? "50%" : harris_percent

  const defaultPage = (
    <Stack direction="column" width={boxWidth} sx={{backgroundColor: "transparent"}} padding={2}>
    {predicted ? <PredictedResults isMobile={isMobile} isForside={isForside}/> : <><Stack direction="row" width="100%" justifyContent="space-between">
        <img src={harris} alt="Harris" height={`${h}px`} width={`${w}px`}/>
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
    

    <USMap predicted={predicted} isMobile={isMobile} isForside={isForside}/></>}

    <Stack direction="column">

    <Stack direction="row" alignItems="center" padding={2} justifyContent="space-between">
    <Typography sx={{"font-family": "var(--brick-fonts-baseHeadlineS)", "color": "gray"}}> Sist oppdatert 6. november, 07:03</Typography>

    <Typography sx={{"font-family": "var(--brick-fonts-baseHeadlineS)", "color": "gray"}}> Tallgrunnlag fra <a href="https://apnews.com/projects/election-results-2024/" target="_blank">AP News</a> </Typography>    
    </Stack>
    </Stack>
    </Stack>
  )

  return defaultPage

  
}

export default ActualResults;