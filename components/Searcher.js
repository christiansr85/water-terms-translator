import React, { useState } from 'react';

import Results from './Results';

function Searcher() {
    const texts = {
        searcherPlaceholder: 'Intorudce término'
    };
    const [searchValue, setSearchValue] = useState('');

    function handleSearchValue(event) {
        setSearchValue(event.target.value);
    }

    function search(event) {
        event.preventDefault();
    }

    return (
        <div className="searcher-container">
            <form className="searcher-container__searcher" onSubmit={search}>
                <input type="text" name="search" placeholder={texts.searcherPlaceholder} value={searchValue} onChange={handleSearchValue} />
            </form>

            <div className="searcher-container__results">
                <Results filter={searchValue}/>            
            </div>
        </div>
    );
}

export default Searcher;