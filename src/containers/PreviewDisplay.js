import { connect } from 'react-redux';
import Preview from '../components/markdown/Preview';
import { getDocument } from '../selectors/markdownSelectors';

const mapStateToProps = state => ({
  document: getDocument(state)
});

export default connect(
  mapStateToProps
)(Preview);
