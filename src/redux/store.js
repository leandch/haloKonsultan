import {createStore} from 'redux';

const initialState = {
  loading: false,
  name: 'Leandra Chika Gayatri',
  address: 'Griya Pamulang 2',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: 'Azzamy',
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
