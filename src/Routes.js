import {Route, Switch} from "react-router-dom";
import React from "react";
import Search from "./components/Search";
import Registration from "./components/Registration";


function Routes() {
    return (
        <Switch>
            <Route path="/registration">
                <Registration/>
            </Route>
            <Route path="/search">
                <Search/>
            </Route>
        </Switch>
    )
}

export default Routes;