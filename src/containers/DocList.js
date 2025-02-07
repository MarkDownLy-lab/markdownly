import { connect } from 'react-redux';
import DocumentList from '../components/markdown/DocumentList';
import { getDocuments } from '../selectors/markdownSelectors';

const mapStateToProps = state => ({
  documents: getDocuments(state)
});

export default connect(
  mapStateToProps
)(DocumentList);
