import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello/Hello';

import "./css/index.scss";

const App = () => {

    return (
        <>
        <Hello name="react"/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
