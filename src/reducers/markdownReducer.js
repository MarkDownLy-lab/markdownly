import { UPDATE_MARKDOWN } from '../actions/markdownActions';
const initialState = { 
  currentDocument: 0,
  markdown: '',
  documents: [{ title:'tab 1', text: 'hello', id: 0 }, 
    { title:'tab 2', text: 'hi', id: 1 }]
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN: 
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}

