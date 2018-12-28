import {takeLatest} from 'redux-saga/effects'
import API from '../Services/Api'
/* ------------- Types ------------- */

import {PodcastTypes} from '../Redux/PodcastRedux'

/* ------------- Sagas ------------- */
import {getPodcasts, apiTest} from "./PodcastSagas";
/* ------------- API ------------- */

const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield [
    takeLatest(PodcastTypes.API_REQUEST, apiTest, api)
  ]
}