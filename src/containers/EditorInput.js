import { connect } from 'react-redux';
import Editor from '../components/markdown/Editor';
import { getMarkdown } from '../selectors/markdownSelectors';

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps
)(Editor);
