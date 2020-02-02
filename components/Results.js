import React, { useEffect, useState } from 'react';

import Term from './Term';

function Results() {
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
            terms.push(<Term key={counter} keyProp={key} value={res[key]}/>);
            counter++;
        }
        return terms;
    }
        
    const results = [];
    for (let key in resources) {
        results.push(
            <div key={key}>
                <div>{key.toUpperCase()}:</div>
                <ul>
                    {getInnerResources(resources[key])}
                </ul>
            </div>
        )
    }
    return (
        <div>
            {results.length ? results : <span>Loading...</span>}
        </div>
    );
}

export default Results;