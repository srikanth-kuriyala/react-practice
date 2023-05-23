import React from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import Home from "./home";
import { HookUseContext, HookUseEffect, HookUseReducer, HookUseState } from "./hooks";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { PageNotFound } from "./stories/404";
import { HeaderMenu } from "./stories/HeaderMenu";
import menu from './stories/menu.json';

function App() {
    return (
        <div className="App">
            <Container>
                <HeaderMenu menu={menu} />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/useState" component={HookUseState} />
                        <Route path="/useEffect" component={HookUseEffect} />
                        <Route path="/useContext" component={HookUseContext} />
                        <Route path="/useReducer" component={HookUseReducer} />
                        <Route path="*" component={PageNotFound}/>
                    </Switch>
                </Router>
            </Container>
        </div>
    );
}

export default App;
