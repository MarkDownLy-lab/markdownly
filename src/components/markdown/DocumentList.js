import React from 'react';
import PropTypes from 'prop-types';

function DocumentList({ documents }) {
  // const documents = ['tab1', 'tab2'];
  const tabList = documents.map(document => (
    <li key={document}>
      {document}</li>
  ));

  return (
  <>
    <ul>{tabList}</ul>
  </>
  );
}

DocumentList.propTypes = {
  documents: PropTypes.array.isRequired
};

export default DocumentList;
