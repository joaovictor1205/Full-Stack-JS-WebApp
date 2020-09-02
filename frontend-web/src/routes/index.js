import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Views
import Home from '../views/Home/index';
import Task from '../views/Task/index';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={ Home } />
                <Route  path="/task" exact component={ Task } />
                <Route  path="/task/:id" exact component={ Task } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;