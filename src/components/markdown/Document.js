import React from 'react';
import EditorInput from '../../containers/EditorInput';
import PreviewDisplay from '../../containers/PreviewDisplay';
import styles from './Document.css';
import DocList from '../../containers/DocList';

export default function Document() {
  return (
    <>
    <div className={styles.Document}>
      <DocList />
      <EditorInput />
      <PreviewDisplay />
    </div>
    </>
  );
}
