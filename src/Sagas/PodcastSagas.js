import {call, put, select} from 'redux-saga/effects'
import PodcastActions from '../Redux/PodcastRedux'

export const getUser = (state) => state.user;

export function* getPodcasts(api) {
  const userData = yield select(getUser);
  const response = yield call(api.GetPodcasts, userData.token);
  if (response.ok && response.data && response.data.results) {
    yield put(PodcastActions.podcastSuccess(response.data.results))
  } else {
    yield put(PodcastActions.podcastFailure())
  }
}

export function* apiTest(api) {

  const responseValue  = "VALUE FROM API";
  //yield put(PodcastActions.apiSuccess(responseValue));
  const githubResponse = yield call(api.GetGithubUser);
  console.log("githubResponse", githubResponse);
  if (githubResponse && githubResponse.data) {
    yield put(PodcastActions.apiSuccess(githubResponse.data));
  }
  return;
  const userData = yield select(getUser);
  const response = yield call(api.GetPodcasts, userData.token);
  if (response.ok && response.data && response.data.results) {
    yield put(PodcastActions.podcastSuccess(response.data.results))
  } else {
    yield put(PodcastActions.podcastFailure())
  }
}