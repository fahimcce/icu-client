import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBlood = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) => {
        const inputText = e.target.value;
        setSearchText(inputText);
        // Call the handleSearch function with the input text to filter the results
        handleSearch(inputText);
    };


    return (
        <div className="search-bar mt-2 flex justify-between">
            <input
                type="text"
                placeholder="Search by blood group..."
                className="border rounded-lg p-2 w-1/2"
                value={searchText}
                onChange={handleChange}
            />
            <Link to='/addBlood'>
                <button className="bg-blue-500 text-white px-4 py-2 mx-1 rounded-lg">
                    Became a Donar
                </button>
            </Link>
        </div>
    );
};

export default SearchBlood;
