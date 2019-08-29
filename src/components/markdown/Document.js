import React from 'react';
import EditorInput from '../../containers/EditorInput';
import PreviewDisplay from '../markdown/Preview';
import PropTypes from 'prop-types';

export default function Document({ markdown, changeMarkdown }) {
  return (
    <>
      <EditorInput markdown={markdown} changeMarkdown={changeMarkdown} />
      <PreviewDisplay markdown={markdown} />
    </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  changeMarkdown: PropTypes.func.isRequired
};


















// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Preview from './Preview';
// import Editor from './Editor';
// import styles from './Document.css';

// class Document extends PureComponent {
//   state = {
//     markdown: '# Hi there'
//   };

//   updateMarkdown = ({ target }) => {
//     this.setState({ markdown: target.value });
//   };

//   render() {
//     const { markdown } = this.state;
//     console.log(this.state);
//     return (
//       <>
//         <div className={styles.Document}>
//           <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
//           <Preview markdown={markdown} />
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = () => {
//   return {
//     //put props/selectors here
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
  
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Document);
