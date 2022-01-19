import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter';
import Hello from './components/Hello/Hello';
import Wrapper from './components/Wrapper/Wrapper';

import "./css/index.scss";

const App = () => {
    return (
        <Wrapper>
            <Hello name="react" color="red" isSpecial/>
            <Hello color="red"></Hello>

            <Counter/>
        </Wrapper>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
