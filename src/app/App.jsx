import React from 'react';
import Box from '../components/box';
import Button from '../components/button';
import Text from '../components/text';

const App = () => {
  return (
    <div className='App' id='App'>
    <Box Globalcolor='red'>
        <Text>
          aboba
        </Text>
        <Text padding='10px' color='red'>
          aboba
        </Text>
        <Text>
          aboba
        </Text>
    </Box>
    <Box>
      <Button>clik me</Button>
    </Box>
    </div>
  );
};
export default App;
