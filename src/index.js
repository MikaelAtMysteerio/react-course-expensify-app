import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import 'regenerator-runtime/runtime';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { Provider } from 'react-redux';
import {firebase} from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>loading</p>, document.getElementById('root'));


firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
})
serviceWorker.unregister();
