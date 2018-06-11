import React, {Component} from 'react';

// Import routing components
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
const history = createHistory();

// Import custom components
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';
import LoginForm from '../containers/auth/LoginContainer';
import SignUpForm from '../containers/auth/SignUpContainer';
import Dashboard from '../containers/dashboard/DashboardContainer';
import AuthenticatedRoute from './AuthenticatedRoute';
import FormComp from '../components/dashboard/FormComp';
import Product from '../components/dashboard/Product';

const Router = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route path="/signup" component={SignUpForm}/>

            <MainLayout>
                <Switch>
                    <AuthenticatedRoute path="/dashboard" component={Dashboard}/>
                    <AuthenticatedRoute path="/Aluno" component={FormComp}/>
                    <AuthenticatedRoute path="/Visitantes" component={Product}/>
                </Switch>
            </MainLayout>

            <Route component={NotFound}/>
        </Switch>
    </ConnectedRouter>
);

export default Router;
