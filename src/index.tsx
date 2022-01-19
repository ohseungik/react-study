import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello/Hello';
import Wrapper from './components/Wrapper/Wrapper';

import "./css/index.scss";

const App = () => {

    return (
        <Wrapper>
            <Hello name="react" color="red"/>
            <Hello color="red"></Hello>
        </Wrapper>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
