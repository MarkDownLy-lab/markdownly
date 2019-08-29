import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ document, changeMarkdown }) {
  return (
    <div>
      <textarea className={styles.Editor} value={document.text} onChange={changeMarkdown} />
    </div>
  );
}

Editor.propTypes = {
  document: PropTypes.object.isRequired,
  changeMarkdown: PropTypes.func.isRequired
};

export default Editor;
