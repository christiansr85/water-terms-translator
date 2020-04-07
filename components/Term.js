import React from 'react';
import Highlighter from 'react-highlight-words';

function Term({ keyProp, value, highlight }) {
    return (
        <div className="results-term">
            <span className="results-term__key">
                <Highlighter
                    searchWords={highlight.split(' ')}
                    autoEscape={true}
                    textToHighlight={keyProp}
                />
            </span>  -  <span className="results-term__value">
                <Highlighter
                    searchWords={highlight.split(' ')}
                    autoEscape={true}
                    textToHighlight={value}
                />
            </span>
        </div>
    );
}

export default Term;