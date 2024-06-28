import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }




    return (
        <div className="flex items-center justify-center h-[15vh] gap-8">
            <div className="relative w-4/5 md:w-2/3 lg:w-1/2">
                <input
                    type="text"
                    onChange={handleChange}
                    className="w-full py-2 pl-4 pr-4 border-2 border-purple-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                    placeholder="Search..."
                />
            </div>
            <button
                className=" h-[2.5rem] bg-purple-600 text-white py-2 px-4 rounded-full focus:outline-none hover:bg-purple-700 transition-all duration-300 ease-in-out hover:scale-105"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
