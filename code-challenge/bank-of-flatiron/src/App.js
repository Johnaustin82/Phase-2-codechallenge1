import React, { useState , useEffect} from 'react';
import './App.css';
import Title from './components/BankTitle';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/Form';
import Table from './components/Table';

function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const Default= [
      {id:'1', Date: '2024-03-30', Description: 'Salary', Category: 'Income', Amount: 35000 },
      {id:'2', Date: '2024-04-2', Description: 'Rent', Category: 'Expense', Amount: -15000 },
      {id:'3', Date: '2024-04-4', Description: 'NHIF', Category: 'Expense', Amount: -1500 },
      {id:'4', Date: '2024-04-10', Description: 'Transport', Category: 'Expense', Amount: -200 },
      {id:'5', Date: '2024-04-15', Description: 'Shopping', Category: 'Expense', Amount: -4500 },
    ];

    setTransactions(Default);
  }, []);

  const handleFormSubmission = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  return ( <div>
    <Title/>
    <SearchBar/>
    <TransactionForm onSubmit={handleFormSubmission} />
    <Table transactions={transactions}/>

  </div>
  );
}

export default App;
