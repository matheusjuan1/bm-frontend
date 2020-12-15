import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Cadastro from './pages/Cadastro';
import NotFound from './components/Helper/NotFound';
import Dashboard from './pages/Dashboard';
import Historico from './pages/Historico';
import Institucional from './pages/Institucional';
import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Institucional} />
                <Route exact path="/bm" component={Dashboard} />
                <Route exact path="/historico/:id" component={Historico } />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/login" component={Login} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;