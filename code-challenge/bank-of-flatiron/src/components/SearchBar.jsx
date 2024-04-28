import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ transactions, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    function handleChange (event) {
        setSearchTerm(event.target.value);
    };

    function handleSearch(){
        const filteredTransactions = transactions.filter(transaction =>
            transaction.description(searchTerm)
        );

        setFilteredTransactions(filteredTransactions);

        onSearch(filteredTransactions);
    };
    return (
        <div id="Search">
            <input
                type="text"
                placeholder="Search your recent transactions"
                value={searchTerm}
                onChange={handleChange}
            />
            <button className="search-button" onClick={handleSearch}>
                <SearchIcon/>
            </button>
            <ul>
                {filteredTransactions.map(transaction =>(
                    <li key={transaction.id}>
                        Date: {transaction.Date}, Description: {transaction.Description}, Category: {transaction.category}, Amount: {transaction.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;