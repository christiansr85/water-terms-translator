import React from 'react';

import Highlight from 'react-highlighter';

function Term({ keyProp, value, highlight }) {
    return (
        <div className="results-term">
            <span className="results-term__key">
                <Highlight search={highlight} ignoreDiacritics={true}>{keyProp}</Highlight>
            </span>  -  <span className="results-term__value">
                <Highlight search={highlight}>{value}</Highlight>
            </span>
        </div>
    );
}

export default Term;