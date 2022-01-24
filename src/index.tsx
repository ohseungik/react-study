import React from 'react';
import ReactDOM from 'react-dom';
import TodoHead from './components/Todo/TodoHead';
import TodoList from './components/Todo/TodoList';
import TodoTemplate from './components/Todo/TodoTemplate';
// import Counter from './components/Counter/Counter';
// import Hello from './components/Hello/Hello';
// import InputSample from './components/InputSample/InputSample';
// import UserList from './components/UserList/UserList';
// import Wrapper from './components/Wrapper/Wrapper';

import "./css/index.scss";

const App = () => {
    return (
        <>      
            <TodoTemplate>
                <TodoHead/>
                <TodoList/>
            </TodoTemplate>      
        </>

    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
