import React, { useEffect, useState } from 'react';

import Term from './Term';

function Results({filter}) {
    const [resources, setResources] = useState();

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/christiansr85/water-terms-translator/master/assets/resources.json')
            .then(res => res.json())
            .then(res => {
                setResources(res);
                console.log(res)
            })
            .catch(err => console.log('err: ', err))
    }, []);

    function getInnerResources(res) {
        const terms = [];
        let counter = 0;
        for (let key in res) {
            if (passesFilter(key)) {
                terms.push(<Term key={counter} keyProp={key} value={res[key]}/>);
                counter++;
            }
        }
        return terms;
    }

    function passesFilter(key) {
        if (!filter || filter === '') {
            return true;
        }
        const filters = filter.toLowerCase().split(' ');
        const keys = key.toLowerCase().split(' ');

        return keys.some(item => filters.some(f => item.indexOf(f) !== -1));
    }
        
    const results = [];
    for (let key in resources) {
        results.push(
            <div key={key}>
                <div className="resuts-index">{key.toUpperCase()}:</div>
                <ul>
                    {getInnerResources(resources[key])}
                </ul>
            </div>
        )
    }
    return (
        <React.Fragment>
            {results.length ? results : <span>Loading...</span>}
        </React.Fragment>
    );
}

export default Results;