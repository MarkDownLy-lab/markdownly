import React from 'react';
import PropTypes from 'prop-types';

function AddDocument({ handleSubmit }) {
  return (
    <form onSubmit = {handleSubmit}>
      <input placeholder="tab name" />
      <button>Add</button>
    </form>
  );
}

AddDocument.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddDocument;
