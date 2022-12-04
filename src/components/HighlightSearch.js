import React from 'react';
import { findAll } from 'highlight-words-core';

const HighlightSearch = (props) => {
  const { searchWords, textToHighlight } = props;
  console.info(searchWords);

  const chunks = findAll({
    searchWords,
    textToHighlight,
  });
  return (
    <React.Fragment>
      {chunks.map((chunk) => {
        const { end, highlight, start } = chunk;
        const text = textToHighlight.substr(start, end - start);
        if (highlight) {
          return <mark style={highlightSyle}>{text}</mark>;
        } else {
          return text;
        }
      })}
    </React.Fragment>
  );
};
const highlightSyle = {
  backgroundColor: '#ffff66',
  padding: 0,
  color: '#42526E',
};
export default HighlightSearch;
