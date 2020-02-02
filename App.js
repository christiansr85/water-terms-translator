import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchView from './pages/SearcherView';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <SearchView />
                </Route>
                
                <Route path="/search">
                    <SearchView />
                </Route>
            </Switch>
        </div>
    )
}

export default App