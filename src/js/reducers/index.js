import { ADD_ARTICLE, DATA_LOADED, API_ERRORED } from '../constants/action-types';

const initialState = {
  articles: [],
  remoteArticles: []
};

export default function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return {...state, articles: [...state.articles, action.payload]}
  }

  if (action.type === DATA_LOADED) {
    return {...state, remoteArticles: [...state.remoteArticles, ...action.payload]}
  }

  if (action.type === API_ERRORED) {
    return {...state, remoteArticles: [...state.remoteArticles, `There was an error: ${action.payload}`]}
  }

  return state;
};