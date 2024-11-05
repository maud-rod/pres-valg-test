import trump from '../Trump.png';
import { USMap } from './USmap.tsx';
import harris from '../Harris.png';
import '../App.css';
import { Box, Stack } from "@mui/system";

type Props = {
    isMobile: boolean;
}

const PredictedResults: React.FC<Props> = ({isMobile}: Props) => {

    let light_blue = "#b5beff"
    let light_red = "#ff9696"

  const harris_predicted = 226
  const trump_predicted = 219
  const totalVotes = 538

  let trump_percent = (100*(trump_predicted/totalVotes)).toString()+"%"
  let harris_percent = (100*(harris_predicted/totalVotes)).toString()+"%";

  let nonTrumpArea = Math.min(269, totalVotes-trump_predicted)
  let greyAreaharris = (nonTrumpArea-harris_predicted)/totalVotes
  let nonHarrisArea = Math.min(269, totalVotes-harris_predicted)
  let greyAreaTrump = (nonHarrisArea-trump_predicted)/totalVotes

  let greyharrisPercent = greyAreaharris > 0 ? (100*greyAreaharris).toString()+"%" : "0%"
  let greyTrumpPercent = greyAreaTrump > 0 ? (100*greyAreaTrump).toString()+"%" : "0%"


  let trump_overweight = (trump_predicted-269)/(totalVotes)
  let harris_overweight = (harris_predicted - 269)/(totalVotes)

  let trump_overweight_percent = trump_overweight > 0 ? (100*(trump_overweight)).toString()+"%" : "0%";
  let harris_overweight_percent =  harris_overweight > 0 ? (100*(harris_overweight)).toString()+"%" : "0%";

  console.log(harris_percent, trump_percent, greyharrisPercent, greyTrumpPercent, trump_overweight_percent, harris_overweight_percent)

  const h = isMobile ? 80 : 140;
  const w = 1.86*h;
  const boxWidth = isMobile ? "380px": "700px"

  const borderHarrisGrey = trump_overweight > 0 ? "none" : "solid 2px white";

  const harrisPercent = harris_overweight > 0 ? "50%" : harris_percent

  console.log(harrisPercent,"maud")

  const defaultPage = (
    <Stack direction="column" width={boxWidth}>
    <Stack direction="row" width="100%">
        <img src={harris} alt="Harris" height={`${h}px`} width={`${w}px`}/>
        <div className="space"/>
        <img src={trump} alt="Trump" height={`${h}px`} width={`${w}px`}/>
      </Stack>
      <Stack direction="row" alignItems="center" width="100%">
      <Box sx={{"background-color": light_blue, "width": harrisPercent, "textAlign": "left", "height": "15px", "padding": "1em", "justifyItems": "center"}}><h2 className="votes" style={{"marginTop": "-12px"}}>{harris_predicted}</h2></Box>
      <Box sx={{"background-color": "#AAAAAA", "width": greyharrisPercent, "height": "47px", borderRight: borderHarrisGrey}} />
      {trump_overweight > 0 && <Box sx={{"background-color": light_red, "width": trump_overweight_percent,"borderRight": "solid 2px white", "height": "47px"}} />}
      {harris_overweight > 0 && <Box sx={{"background-color": light_blue, "width": harris_overweight_percent,"borderLeft": "solid 2px white", "height": "47px"}} />}
      <Box sx={{"background-color": "#AAAAAA", "width": greyTrumpPercent, "height": "47px"}} />
      {/*<Box sx={{"background-color": light_red, "width": trump_overweight,"borderRight": "solid 2px black", "height": "47px"}} />*/}
      <Box sx={{"background-color": light_red, "height": "15px","width": trump_percent, "textAlign": "right", "padding": "1em", "alignItems": "center"}}><h2 className="votes" style={{"marginTop": "-12px"}}>{trump_predicted}</h2></Box>
    </Stack>

    <USMap predicted={true} isMobile={isMobile}/>
    
    </Stack>)

  return defaultPage

  
}

export default PredictedResults;