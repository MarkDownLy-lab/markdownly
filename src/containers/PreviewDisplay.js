import { connect } from 'react-redux';
import Preview from '../components/markdown/Preview';
import { getMarkdown } from '../selectors/markdownSelectors';

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

export default connect(
  mapStateToProps
)(Preview);
