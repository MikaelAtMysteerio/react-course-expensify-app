import React from 'react';
import {connect} from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import {addExpense} from '../actions/expenses'
import { tsPropertySignature } from '@babel/types';

const AddExpendePage = (props) => (

    <div>
        <h1>Add Expense</h1>
        <ExpenseFrom
            onSubmit={(expense) => {
                console.log(expense)
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpendePage);