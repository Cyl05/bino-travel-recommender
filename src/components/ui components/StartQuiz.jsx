import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const StartQuiz = (props) => {
    return (
        <Box
            w="52%"
            h="50vh"
            bgColor="white"
            color="black"
            textAlign="center"
            borderRadius={20}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection={'column'}
            gap={5}
            p={4}
            bg="rgba(255, 255, 255, 0.8)"
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.7)"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
            >
                Find your dream travel destination using this quick quiz! 🎯
            </Text>
            <Button
                colorPalette={'green'}
                color={'white'}
                h={'15%'}
                p={5}
                onClick={() => props.setStarted(1)}
                transition="transform 0.3s ease-in-out"
                _hover={{
                    transform: "scale(1.1)",
                }}
                fontSize={'lg'}
            >
                START
                <FaArrowRight />
            </Button>
        </Box>
    )
}

export default StartQuiz;