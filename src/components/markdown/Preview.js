import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';

function Preview({ document }) {
  const __html = marked(document.text);
  return <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>;
}

Preview.propTypes = {
  document: PropTypes.object.isRequired
};

export default Preview;
