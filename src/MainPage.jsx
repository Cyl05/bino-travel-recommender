import { Box } from '@chakra-ui/react';
import React from 'react';
import StartQuiz from './components/ui components/StartQuiz';
import Questions from './components/ui components/Questions';

const MainPage = () => {
    const [started, setStarted] = React.useState(0);
    const [counter, setCounter] = React.useState(0);

    return (
        <Box
            w="100%"
            h="100vh"
            bgImage="url(https://news.yale.edu/sites/default/files/styles/full/public/ynews-machu_picchu_peru-wiki.jpg?itok=2UrS7Hw8)"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            position="relative"
        >
            <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                backdropFilter="blur(10px)"
                backgroundColor="rgba(255, 255, 255, 0.1)"
                zIndex={0}
                pointerEvents="none"
            />
            <Box
                w="100%"
                h="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
                flexDirection={'column'}
                gap={5}
                zIndex={1}
            >
                {(started == 0) ? <StartQuiz started={started} setStarted={setStarted} /> : <Questions />}
            </Box>
        </Box>
    )
}

export default MainPage;