import { Button, Stack, Typography } from "@mui/material";

type QuestionProps = {
    questionString: string;
    pointDistribution: number[];
    onKamalaScoreUpdated: (score: number) => void;
    onDonaldScoreUpdated: (score: number) => void;
    onQuestionAnswered: () => void;
}

function Question({questionString, pointDistribution, onKamalaScoreUpdated, onDonaldScoreUpdated, onQuestionAnswered}: QuestionProps) {


    const onAlternativeSelected = (selection: number) => {
        onKamalaScoreUpdated(pointDistribution[selection]);
        onDonaldScoreUpdated(pointDistribution[selection+4]);
        onQuestionAnswered();
    }


    return <Stack direction="column" gap={1} alignItems={"center"}>
        <Typography color="black" variant="h4" sx={{"font-family": "var(--brick-fonts-baseHeadlineS)"}}>{questionString}</Typography>

        <Stack direction="row" gap={1}>
            <Button onClick={() => {
                onAlternativeSelected(0)
                }}><Typography sx={{"font-family": "var(--brick-fonts-baseHeadlineS)"}}>Helt uenig</Typography></Button>
            <Button onClick={() => {
                onAlternativeSelected(1)
            }}><Typography sx={{"font-family": "var(--brick-fonts-baseHeadlineS)"}}>Litt uenig</Typography></Button>
            <Button onClick={() => {
                onAlternativeSelected(2)
            }}><Typography sx={{"font-family": "var(--brick-fonts-baseHeadlineS)"}}>Litt enig</Typography></Button>
            <Button onClick={() => {
                onAlternativeSelected(3)
            }}><Typography sx={{"font-family": "var(--brick-fonts-baseHeadlineS)"}}>Helt enig</Typography></Button>
        </Stack>

    </Stack>
}

export default Question;