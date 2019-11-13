import React from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

function Test(){
    return (
        <TypistLoop interval={3000}>
        {[
          'Hello World',
          'Good Morning',
          'Bye',
        ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
      </TypistLoop>
    )
}

export default Test;