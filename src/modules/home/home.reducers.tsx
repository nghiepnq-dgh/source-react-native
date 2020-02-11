import {HOME} from '../../actions/actionTypes'

const initialState = {
    users: {},
};

export default function homeReducer(state = initialState, action: any = {}) {
    switch (action.type) {
      case HOME.GET_DATA_USER:
        return { ...state, users: action.payload };
      default:
        return state;
    }
  }
  