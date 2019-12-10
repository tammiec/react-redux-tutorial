import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: []
};

export default function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: [...state.articles, action.payload]
    })
  }
  return state;
};