import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchClick = () => {
        handleSearch(searchText);
    };

    return (
        <div className="flex flex-col items-center space-y-4 mb-4 mt-4">
            <input
                type="text"
                placeholder="Search by Name"
                className="border rounded-lg p-2 w-1/2"
                value={searchText}
                onChange={handleChange}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSearchClick}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
