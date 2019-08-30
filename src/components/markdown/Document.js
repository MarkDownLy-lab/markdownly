import React from 'react';
import EditorInput from '../../containers/EditorInput';
import PreviewDisplay from '../../containers/PreviewDisplay';
import styles from './Document.css';
import DocList from '../../containers/DocList';
import AddDoc from '../../containers/AddDoc';

export default function Document() {
  return (
    <>
    <div className={styles.Document}>
      <DocList />
      <AddDoc />
      <EditorInput />
      <PreviewDisplay />
    </div>
    </>
  );
}
