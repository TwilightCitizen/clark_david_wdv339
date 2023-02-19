/*
David A. Clark, Jr.
Student #0004796375
Class WDV339-O
Term C202302
Section	01
Project Portfolio III
*/

// Library Imports

import { ref, unref, watchEffect } from 'vue';

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
const found = ref(false);

const contraReducer = (action) => {
  if (!action.terms) return;
  
  if (action.type !== actions.searched_for) {
    state = initialState;
    //found.value = false;
    
    return;
  }
  
  const entry = state.codesRemaining[0];
  
  state = action.terms.toLowerCase().includes(entry) ? {
    codesRemaining: state.codesRemaining.slice(1),
    searched: [...state.searched, action.terms]
  } : initialState;
}

const useContraEasterEgg = searchedFor => {
  const doReduce = terms => {
    contraReducer({
      type: actions.searched_for,
      terms: terms
    });
  
    if (!state.codesRemaining.length) {
      found.value = true;
      contraReducer({ type: actions.reset })
    }
  };
  
  const debouncedReduce = (() => {
    let timer;
    
    return () => {
      const searchTerms = unref(searchedFor);
      
      if (timer) clearTimeout(timer);
      
      timer = setTimeout(() => {
        doReduce(searchTerms);
      }, 1000);
    };
  })();
  
  watchEffect(debouncedReduce);
  
  return { found };
};

// Exports

export default useContraEasterEgg;