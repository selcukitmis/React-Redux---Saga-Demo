import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  podcastRequest: ['data'],
  podcastSuccess: ['payload'],
  podcastFailure: null,
  demoRequest   : null,
  demoSuccess   : null,
  demoFailure   : null,
  apiRequest    : null,
  apiSuccess    : ['payload'],
  apiFailure    : null
});

export const PodcastTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data     : null,
  fetching : null,
  payload  : null,
  error    : null,
  demoValue: null,
  apiValue : null
});

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, {data}) => state.merge({fetching: true, data, payload: null});

// successful api lookup
export const success = (state, action) => {
  const {payload} = action;
  return state.merge({fetching: false, error: null, payload})
};

// Something went wrong somewhere.
export const failure = state => state.merge({fetching: false, error: true, payload: null});

// request the data from an api
export const apiRequest = (state, {data}) => state.merge({fetching: true, data, apiValue: null});

// successful api lookup
export const apiSuccess = (state, action) => {
  console.log(action.payload);
  return state.merge({fetching: false, error: null, apiValue: action.payload})
};

// Something went wrong somewhere.
export const apiFailure = state => state.merge({fetching: false, error: true, apiValue: null});

// request the data from an api
export const demoRequest = (state, {data}) => state.merge({
  fetching : true,
  data,
  payload  : null,
  demoValue: "TEST REQUEST"
});

// successful api lookup
export const demoSuccess = (state, action) => {
  const {payload} = action;
  return state.merge({fetching: false, error: null, demoValue: "TEST SUCCESS"})
};

// Something went wrong somewhere.
export const demoFailure = state => state.merge({fetching: false, error: true, demoValue: "TEST FAILURE"});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PODCAST_REQUEST]: request,
  [Types.PODCAST_SUCCESS]: success,
  [Types.PODCAST_FAILURE]: failure,
  [Types.DEMO_REQUEST]   : demoRequest,
  [Types.DEMO_SUCCESS]   : demoSuccess,
  [Types.DEMO_FAILURE]   : demoFailure,
  [Types.API_REQUEST]    : apiRequest,
  [Types.API_SUCCESS]    : apiSuccess,
  [Types.API_FAILURE]    : apiFailure,
});
