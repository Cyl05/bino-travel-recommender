import { Box } from '@chakra-ui/react';
import React from 'react';

const MainPage = () => {
    return (
        <Box w={'100%'} h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgColor={'#1B4965'}>
            <Box
                w={'50%'}
                h={'50vh'}
                bgColor={'white'}
                color={'black'}
                textAlign={'center'}
            >
                Hello
            </Box>
        </Box>
    )
}

export default MainPage;