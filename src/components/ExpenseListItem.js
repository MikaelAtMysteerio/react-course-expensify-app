import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const ExpenseListItem = ({description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>Cost: {amount}e - Date: {createdAt}</p>
        
    </div>
);

export default connect()(ExpenseListItem);