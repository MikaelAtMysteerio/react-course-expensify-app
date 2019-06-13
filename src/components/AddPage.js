import React from 'react';
import {connect} from 'react-redux';
import ExpenseFrom from './ExpenseForm';
import {startAddExpense} from '../actions/expenses'
import { tsPropertySignature } from '@babel/types';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return(

            <div>
            <h1>Add Expense</h1>
            <ExpenseFrom
                onSubmit={this.onSubmit}
            />
            </div>
        );
    }
}
const mapdispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapdispatchToProps)(AddExpensePage);