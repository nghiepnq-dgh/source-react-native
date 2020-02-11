import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/actionTypes';
import  {fetchUser} from '../home/home.actions'
import APIGetUsers from './home.handler';
import { BaseAction } from '../../types';

function* fetchUserResult(action: BaseAction) {
  try {
    const user = yield call(APIGetUsers.fetchUser, action.payload);
    yield put(fetchUser(user));
  } catch (e) {
    console.log("DEBUG-CODE: function*fetchUser -> e", e)
  }
}

export default function* root() {
  yield takeEvery(types.HOME.GET_DATA_USER, fetchUserResult);
}
