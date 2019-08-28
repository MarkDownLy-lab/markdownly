import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, updateMarkdown }) {
  return (
    <textarea className={styles.Editor} type="text" value={markdown} onChange={updateMarkdown} styles />
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

export default Editor;
