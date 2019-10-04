import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const Header = ({ startLogout, expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <header className="header">
      <div className="content-container">
        <div className="header-title">
          <Link to="/dashboard" style={{ textDecoration: 'none', color: "white" }}>
            <h1>What I Spendx</h1>
          </Link>

          <div className="header-summary">
            <h1 className="header-summary-title">Viewing</h1>
            <h1> <span>{expenseCount}</span> {expenseWord}  </h1>
            <h1> {formattedExpensesTotal}</h1>
          </div>
          <button className="logout-button" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
