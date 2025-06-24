import { Box, Heading } from '@chakra-ui/react';
import { Provider } from './components/chakra components/provider.jsx';
import React from 'react';
import MainPage from './MainPage.jsx';

const App = ({ Component }) => {
  return (
    <Provider>
        <MainPage />
    </Provider>
  )
}

export default App;