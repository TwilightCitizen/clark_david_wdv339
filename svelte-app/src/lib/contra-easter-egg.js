/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { Subject } from 'rxjs';

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

let state = initialState;

const contraReducer = (action) => {
  if (action.type !== actions.searched_for) {
    state = initialState; return;
  }
  
  const entry = state.codesRemaining[0];
  
  state = action.terms.toLowerCase().includes(entry) ? {
    codesRemaining: state.codesRemaining.slice(1),
    searched: [...state.searched, action.terms]
  } : initialState;
}

const wasFound = new Subject();

const searchedFor = terms => {
  contraReducer({
    type: actions.searched_for,
    terms: terms
  });
  
  if (!state.codesRemaining.length) {
    contraReducer({ type: actions.reset })
    wasFound.next(null);
  }
}

// Exports

export { wasFound, searchedFor };