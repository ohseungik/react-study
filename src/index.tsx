import React from 'react';
import ReactDOM from 'react-dom';
import Users from './components/Api/Users';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import TodoCreate from './components/Todo/TodoCreate';
// import TodoHead from './components/Todo/TodoHead';
// import TodoList from './components/Todo/TodoList';
// import { TodoProvider } from './components/Todo/TodoProvider';
// import TodoTemplate from './components/Todo/TodoTemplate';
import Counter from './components/Counter/Counter';
import Hello from './components/Hello/Hello';
import InputSample from './components/InputSample/InputSample';
// import UserList from './components/UserList/UserList';
// import Wrapper from './components/Wrapper/Wrapper';

import "./css/index.scss";


const App = () => {
    return (
        <>
        <Switch>
            <Route path="/" exact={true} component={Hello}></Route>
            <Route path="/InputSample" exact={true} component={InputSample}></Route>
            <Route path="/counter" exact={true} component={Counter}></Route>
        </Switch>
        </>
    )
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
