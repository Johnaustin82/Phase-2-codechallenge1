import React, { useState } from 'react';
import TransactionForm from './Form';
import Table from './Table';

function TransactionsPage(){
 const [transactions, setTransactions] = useState([]);

 const handleFormSubmit =(newTransaction)=>{
    setTransactions([...transactions, newTransaction]);
 };

 return (
    <div>
        <TransactionForm onSubmit={handleFormSubmit}/>
        <Table transactions={transactions}/>
    </div>
 );
};

export default TransactionsPage;
