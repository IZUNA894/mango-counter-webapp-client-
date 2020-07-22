import React, { Component } from 'react'
import { Switch, Route, } from "react-router-dom";
import Add from "./add";
import List from "./list"
export default class section extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/add">
                        <Add />
                    </Route>

                    <Route path="/">
                        <List />
                    </Route>
                </Switch>
            </>
        )
    }
}
