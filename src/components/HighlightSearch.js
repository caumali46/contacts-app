import React from 'react';
import { findAll } from 'highlight-words-core';

const HighlightSearch = (props) => {
  const { searchWords, textToHighlight } = props;

  const chunks = findAll({
    searchWords,
    textToHighlight,
  });

  return (
    <React.Fragment>
      {chunks
        .map((chunk) => {
          const { end, highlight, start } = chunk;
          const text = textToHighlight.substr(start, end - start);
          if (highlight) {
            return `<mark>${text}</mark>`;
          } else {
            return text;
          }
        })
        .join('')}
    </React.Fragment>
  );
};
export default HighlightSearch;
