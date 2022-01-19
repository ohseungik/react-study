import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Counter';
import Hello from './components/Hello/Hello';
import InputSample from './components/InputSample/InputSample';
import UserList from './components/UserList/UserList';
import Wrapper from './components/Wrapper/Wrapper';

import "./css/index.scss";

const App = () => {
    return (
        <Wrapper>
            <Hello name="react" color="red" isSpecial/>
            <Hello color="red"></Hello>

            <br/>

            <Counter/>

            <br/>

            <InputSample/>
            
            <br/>

            <UserList/>
        </Wrapper>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
