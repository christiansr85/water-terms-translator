import React, { useState } from 'react';

import Results from './Results';

function Searcher() {
    const texts = {
        searcherPlaceholder: 'Término',
        searcherInputSubmit: 'Buscar'
    };
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
                <input type="text" name="search" placeholder={texts.searcherPlaceholder} value={searchValue} onChange={handleSearchValue} />
                <input type="submit" value={texts.searcherInputSubmit} />
            </form>

            <Results className="searcher-container__results"/>
        </div>
    );
}

export default Searcher;