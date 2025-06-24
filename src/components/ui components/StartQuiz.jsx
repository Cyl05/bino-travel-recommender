import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

const StartQuiz = (props) => {
    return (
        <Box
            w="50%"
            h="50vh"
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
                Dream Travel Destination Finder 🎯
            </Text>
            <Button
                bgColor={'blue'}
                color={'white'}
                onClick={() => props.setStarted(1)}
            >
                START
            </Button>
        </Box>
    )
}

export default StartQuiz;