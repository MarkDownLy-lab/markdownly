import React from 'react';
import EditorInput from '../../containers/EditorInput';
import PreviewDisplay from '../../containers/PreviewDisplay';
import styles from './Document.css';


export default function Document() {
  return (
    <>
    <div className={styles.Document}>
      <EditorInput />
      <PreviewDisplay />
    </div>
    </>
  );
}
