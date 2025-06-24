import { Button } from '@chakra-ui/react';
import React from 'react';

const Option = (props) => {
    return (
        <Button
            h={'10vh'}
            onClick={() => props.handleClick(1)}
            transition="transform 0.3s ease-in-out"
            _hover={{
                transform: "scale(1.05)",
            }}
            borderRadius={10}
            bg="rgba(255, 255, 255, 0.5)"
            backdropFilter="blur(10px)"
            boxShadow="lg"
            border="1px solid rgba(255, 255, 255, 0.7)"
        >
            {props.text}
        </Button>
    )
}

export default Option;