import React from 'react';
import PropTypes from 'prop-types';

function AddDocument({ handleSubmit, title }) {
  return (
    <form onSubmit = {handleSubmit}>
      <button>Add</button>
      <input onChange={handleSubmit} placeholder="tab name" value={title} />
    </form>
  );
}

AddDocument.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default AddDocument;
