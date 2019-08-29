import { UPDATE_MARKDOWN } from '../actions/markdownActions';
const initialState = { 
  markdown: 'Type Here'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN: 
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
