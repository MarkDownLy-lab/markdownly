import { connect } from 'react-redux';
import DocumentList from '../components/markdown/DocumentList';
import { getDocuments } from '../selectors/markdownSelectors';
import { addDocument } from '../actions/markdownActions';


const mapStateToProps = state => ({
  documents: getDocuments(state)
});

const mapDispatchToProps = dispatch => ({
  changeDocument({ target }) {
    dispatch(addDocument(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentList);
