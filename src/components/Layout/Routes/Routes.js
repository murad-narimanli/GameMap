import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../../Pages/Home/Home";
const Routes = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    );
}


export default Routes;
