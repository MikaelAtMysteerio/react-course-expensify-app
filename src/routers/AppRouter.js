import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/ExpenseDashboardPage';
import AddPage from '../components/AddPage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import  NotFoundPage  from '../components/NotFoundPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/AddPage" component={AddPage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;