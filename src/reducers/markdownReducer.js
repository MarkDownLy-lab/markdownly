import { UPDATE_MARKDOWN, ADD_DOCUMENT } from '../actions/markdownActions';
const initialState = { 
  currentDocument: 0,
  markdown: '',
  documents: [
    { title:'tab 1', text: 'whatever', id: 0 }]
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN: 
      return { ...state, markdown: action.payload };
    case ADD_DOCUMENT:
      return { ...state, documents: [...state.documents, { title: action.payload, text: '', id: state.documents.length }] };
    default:
      return state;
  }
}

