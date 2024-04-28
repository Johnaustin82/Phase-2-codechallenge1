import React from 'react';


function Table ({ transactions }) {
 return (
    <div id='container'>
    <table id='table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.Date}</td>
            <td>{transaction.Description}</td>
            <td>{transaction.Category}</td>
            <td>{transaction.Amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
 );
};

export default Table;
