import React, { useState } from 'react';

function TransactionForm ({ onSubmit }) {
    const [Date, setDate] = useState('');
    const [Description, setDescription] = useState('');
    const [Category, setCategory] = useState('')
    const [Amount, setAmount] = useState('');;

const handleSubmission = (event) => {
    event.preventDefault();
    onSubmit({ Date,Description,Category,Amount });
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
};

 return (
    <form id ="TransanctionForm" onSubmit={handleSubmission}>
      <input
      type='date'
      placeholder='Date'
      value={Date}
      onChange={(event) => setDate(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={Description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input 
      type='text'
      placeholder="Category"
      value={Category}
      onChange={(event) => setCategory(event.target.value)}
      />
       <input
        type="number"
        placeholder="Amount"
        value={Amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <button className='submission' type="submit">Add Transaction</button>
    </form>
    
 );
};

export default TransactionForm;
