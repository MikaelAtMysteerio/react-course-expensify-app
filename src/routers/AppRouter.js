import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/ExpenseDashboardPage';
import AddPage from '../components/AddPage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage  from '../components/NotFoundPage';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history= {history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={Login} />
                <PrivateRoute path="/Dashboard" component={Dashboard} />
                <PrivateRoute path="/AddPage" component={AddPage} />
                <PrivateRoute path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;