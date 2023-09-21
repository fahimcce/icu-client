import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) => {
        const inputText = e.target.value;
        setSearchText(inputText);
        // Call the handleSearch function with the input text to filter the results
        handleSearch(inputText);
    };



    return (
        <div className="flex  items-center mt-2">
            <input
                type="text"
                placeholder="Search by Name"
                className="border rounded-lg p-2 w-1/2"
                value={searchText}
                onChange={handleChange}
            />

        </div>
    );
};

export default SearchBar;
