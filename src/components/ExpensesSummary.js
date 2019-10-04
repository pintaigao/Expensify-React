import React from 'react';
import { Link } from 'react-router-dom';
import IosAdd from "react-ionicons/lib/IosAdd";

export const ExpensesSummary = () => {
  return (
    <div className="page-header">
      <div className="content-container">

        <Link className="button" to="/create">
          <div className="add-expense-button">
            <IosAdd color="white" fontSize="40px" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExpensesSummary;
