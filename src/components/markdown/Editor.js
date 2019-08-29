import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdown, changeMarkdown }) {
  return (
    <textarea className={styles.Editor} value={markdown} onChange={changeMarkdown} styles />
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  changeMarkdown: PropTypes.func.isRequired
};

export default Editor;
