import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="listItemContainer" to={`/edit/${id}`}>
    <span className="list-item-date">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    <div className="list-item-description">
      <h3 className="list-item-title">{description}</h3>
      <h3 className="list-item-price">{numeral(amount / 100).format('$0,0.00')}</h3>
    </div>
  </Link>
);

export default ExpenseListItem;
