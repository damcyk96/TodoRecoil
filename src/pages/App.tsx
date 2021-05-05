import React from 'react';
import TodoTemplate from './TodoTemplate';
import { Route, Switch } from 'react-router-dom';
import { TODO_TYPE } from "./constants";

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route
        exact
        path='/'
      >
        <TodoTemplate />
      </Route>
      <Route
        exact
        path='/completed'

      >
        <TodoTemplate todoType={TODO_TYPE.COMPLETED} />
      </Route>
      <Route
        exact
        path='/uncompleted'

      >
        <TodoTemplate todoType={TODO_TYPE.UNCOMPLETED} />
      </Route>
    </Switch>
  );
}

export default App;
