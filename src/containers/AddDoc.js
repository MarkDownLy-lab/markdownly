import { connect } from 'react-redux';
import AddDocument from '../components/markdown/AddDocument';
import { addDocument } from '../actions/markdownActions';

const mapDispatchToProps = dispatch => ({
  handleSubmit(event) {
    event.preventDefault();
    dispatch(addDocument(event.target[0].value));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddDocument);
