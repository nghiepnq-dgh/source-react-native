import { action } from 'typesafe-actions';
import * as types from '../../actions/actionTypes';

export const fetchUser = (payload:any) => action(types.HOME.GET_DATA_USER, payload)