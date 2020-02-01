import React, { useState } from 'react';

function Searcher() {
    const [searchValue, setSearchValue] = useState('');

    function handleSearchValue(event) {
        setSearchValue(event.target.value);
    }

    function search(event) {
        console.log('typed: ', searchValue);
        event.preventDefault();
    }

    return (
        <div className="searcher-container">
            <form className="searcher-container__searcher" onSubmit={search}>
                <label>
                    Name:
            <input type="text" name="name" value={searchValue} onChange={handleSearchValue} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Searcher;