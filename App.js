import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchView from './pages/SearcherView';

function App() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/">
                    <SearchView />
                </Route>
                
                <Route path="/search">
                    <SearchView />
                </Route>
            </Switch>
        </Fragment>
    )
}

export default App