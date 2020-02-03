import React from 'react';

function Term({ keyProp, value }) {
    return (
        <div className="results-term">
            <span className="results-term__key">{keyProp}</span>  -  <span className="results-term__value">{value}</span>
        </div>
    );
}

export default Term;