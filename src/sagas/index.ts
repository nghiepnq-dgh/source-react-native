import { all } from 'redux-saga/effects';
import users from './users';
import home from '../modules/home/home.saga'

export default function* root() {
  yield all([users(), home()]);
  // yield all([home()])
}
