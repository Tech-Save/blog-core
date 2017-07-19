import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as oidcReducer } from "redux-oidc";
import { reducer as formReducer } from 'redux-form';
import blogs from "./blogs";
import posts from "./posts";

const reducers = {
  routing: routerReducer,
  oidc: oidcReducer,
  form: formReducer,
  blogStore: blogs,
  postStore: posts
};

export default combineReducers(reducers);
