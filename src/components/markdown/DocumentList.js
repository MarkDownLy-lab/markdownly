import React from 'react';
import PropTypes from 'prop-types';

function DocumentList({ documents }) {
  const tabList = documents.map((document, i) => (
    <li key={i}>
      <button>
        {document.title}
      </button>
    </li>
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
