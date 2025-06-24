import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import FinalResults from './FinalResults';

const Questions = () => {
    const [counter, setCounter] = React.useState(0);
    const questions = [
        ["What is your budget?", "Less than ₹30,000", "₹30,000 - ₹70,000", "₹70,000-₹1.5L", "₹1.5L+"],
        ["What type of activities do you have in mind?", "Adventure", "Relaxation", "Culture/History", "Food/Nightlife"],
        ["What is your preferred climate?", "Tropical", "Cool", "Snowy", "Doesn't matter"],
        ["Who are you traveling with?", "Solo", "Partner", "Friends", "Family"]
    ];
    const [answers, setAnswers] = React.useState([]);

    const handleClick = (num) => {
        setAnswers((prev) => [...prev, questions[counter][num]]);
        setCounter((prev) => prev + 1);
    }

    return (
        <>
            {
                (counter < 4)
                    ? <>
                        <Box
                            w={"50%"}
                            h="20vh"
                            bgColor="white"
                            color="black"
                            textAlign="center"
                            borderRadius={20}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection={'column'}
                            p={4}
                        >
                            <Text
                                fontSize="4xl"
                                fontWeight="bold"
                            >
                                {questions[counter][0]}
                            </Text>
                        </Box>
                        <Grid h={'30vh'} w={'50%'} templateRows={'repeat(2, 1fr)'} templateColumns={'repeat(2, 1fr)'} gap={5}>
                            <Button h={'10vh'} onClick={() => handleClick(1)}>{questions[counter][1]}</Button>
                            <Button h={'10vh'} onClick={() => handleClick(2)}>{questions[counter][2]}</Button>
                            <Button h={'10vh'} onClick={() => handleClick(3)}>{questions[counter][3]}</Button>
                            <Button h={'10vh'} onClick={() => handleClick(4)}>{questions[counter][4]}</Button>
                        </Grid>
                    </>
                    : <FinalResults answers={answers} />
            }
        </>
    )
}

export default Questions;