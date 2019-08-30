import { connect } from 'react-redux';
import Editor from '../components/markdown/Editor';
import { getDocument } from '../selectors/markdownSelectors';
import { updateMarkdown } from '../actions/markdownActions';


const mapStateToProps = state => ({
  document: getDocument(state)
});

const mapDispatchToProps = dispatch => ({
  changeMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);

// test//
