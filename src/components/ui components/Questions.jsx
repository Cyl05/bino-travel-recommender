import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';
import FinalResults from './FinalResults';
import Option from './Option';

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
                            gap={4}
                            boxShadow="lg"
                            p={4}
                            bg="rgba(255, 255, 255, 0.8)"
                            backdropFilter="blur(10px)"
                            border="1px solid rgba(255, 255, 255, 0.7)"
                        >
                            <Text fontSize="4xl" fontWeight="bold" color={'green'}>{counter + 1}.</Text>
                            <Text
                                fontSize="4xl"
                                fontWeight="bold"
                            >
                                {questions[counter][0]}
                            </Text>
                        </Box>
                        <Grid h={'30vh'} w={'50%'} templateRows={'repeat(2, 1fr)'} templateColumns={'repeat(2, 1fr)'} gap={5}>
                            <Option text={questions[counter][1]} handleClick={handleClick} />
                            <Option text={questions[counter][2]} handleClick={handleClick} />
                            <Option text={questions[counter][3]} handleClick={handleClick} />
                            <Option text={questions[counter][4]} handleClick={handleClick} />
                        </Grid>
                    </>
                    : <FinalResults answers={answers} />
            }
        </>
    )
}

export default Questions;