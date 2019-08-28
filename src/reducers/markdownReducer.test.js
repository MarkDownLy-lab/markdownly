import reducer from './markdownReducer';

describe('markdownReducer', () => {
  it('return the same state when it does not understand the action', () => {
    const state = { markdown: 'yo waddup' };
    const action = {
      type: 'BOGUS', 
      payload: 'Vasily'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });


});
