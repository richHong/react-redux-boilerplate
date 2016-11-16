import { combineReducers } from 'redux';

function exampleReducer (state = 'Hello World', action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
 example: exampleReducer
});

export default rootReducer;

