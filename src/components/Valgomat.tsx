import { useState } from "react";
import questions from "./Questions";
import Question from "./Question";
import { Stack, Typography } from "@mui/material";
import trump from "../Trump.png";
import harris from "../Harris.png";

function Valgomat() {

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [scoreKamala, setScoreKamala] = useState(0);
    const [scoreDonald, setScoreDonald] = useState(0);

    const currentQuestion = questions[currentQuestionNumber];

    if (currentQuestionNumber === questions.length){
        const becameKamala = scoreKamala > scoreDonald;

        if (becameKamala){
            return  <Stack>
                <img src={harris} className="logo" alt="Harris" />
                <Typography color={"black"} variant="h4" > {`You are ${(scoreKamala/(scoreKamala + scoreDonald))*100}% Kamala!`}
                </Typography>
            </Stack>
        }

        return <Stack>
        <img src={trump} className="logo" alt="Trump" />
        <Typography color={"black"} variant="h4" > {`You are ${(scoreDonald/(scoreKamala + scoreDonald))*100}% Trump!`}
         </Typography>
        </Stack>
    }
    console.log(scoreKamala,scoreDonald)


    return <>
    <img src={harris} className="logo" alt="Harris" />
    <img src={trump} className="logo" alt="Trump" />
    <Question questionString={currentQuestion.question} pointDistribution={currentQuestion.score} onKamalaScoreUpdated={(score: number) => setScoreKamala((prev) => prev+score)} onDonaldScoreUpdated={(score: number) => setScoreDonald((prev) => prev+score)} onQuestionAnswered={() => setCurrentQuestionNumber((prev) => prev+1)
    }/></>
}

export default Valgomat;