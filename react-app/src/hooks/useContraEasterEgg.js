/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { useEffect, useReducer } from 'react';

// Definitions

const fiftyLivesCodes = [
  'up', 'up',
  'down', 'down',
  'left', 'right',
  'left', 'right',
  'b', 'a'
];

const actions = {
  searched_for: 'searched_for',
  reset: 'reset'
};

const initialState = {
  codesRemaining: fiftyLivesCodes,
  searched: []
};

const contraReducer = (state, action) => {
  if (action.type === actions.searched_for) {
    const entry = state.codesRemaining[0];
    
    if (action
      .terms
      .toLowerCase()
      .includes(entry)
    ) {
      return ({
        codesRemaining: state.codesRemaining.slice(1),
        searched: [...state.searched, action.terms]
      });
    }
    
    return initialState;
  }
  
  return initialState;
};

const useContraEasterEgg = onFulfilled => {
  const [state, dispatch] = useReducer(
    contraReducer, initialState
  );
  
  useEffect(() => {
    if (!state.codesRemaining.length && onFulfilled) {
      onFulfilled();
      dispatch({ type: actions.reset });
    }
  }, [state]);
  
  const searchedFor = terms => {
    dispatch({
      type: actions.searched_for,
      terms: terms
    });
  };
  
  return [searchedFor];
};

// Exports

export default useContraEasterEgg;