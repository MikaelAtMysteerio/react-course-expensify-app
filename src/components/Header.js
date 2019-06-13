import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout} from '../actions/auth'

const Header = ({ startLogout}) => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/Dashboard" activeClassName="is-active" >Dashboard </NavLink>
        <NavLink to="/AddPage" activeClassName="is-active" >AddPage </NavLink>
        <button onClick={startLogout}>Log out</button>
    </header>
);

const mapDispatchProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchProps) (Header);
