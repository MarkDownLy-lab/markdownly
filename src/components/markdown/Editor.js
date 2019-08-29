import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ documents, changeMarkdown }) {
  return (
    <div>
      <textarea className={styles.Editor} value={documents} onChange={changeMarkdown} />
    </div>
  );
}

Editor.propTypes = {
  documents: PropTypes.string.isRequired,
  changeMarkdown: PropTypes.func.isRequired
};

export default Editor;
