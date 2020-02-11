import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers/app';
import homeReducer from './modules/home/home.reducers'
import usersReducer from './reducers/users';
import sagas from './sagas';

/*
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */

const appPersistConfig = {
  storage: AsyncStorage,
  key: 'app',
};

const userPersistConfig = {
  storage: AsyncStorage,
  key: 'user',
};

const homePersistConfig = {
  storage: AsyncStorage,
  key: 'home',
};

export const reducers = {
  app: persistReducer(appPersistConfig, appReducer),
  users: persistReducer(userPersistConfig, usersReducer),
  home: persistReducer(homePersistConfig, homeReducer)
};

export const rootReducer = combineReducers(reducers);

// tslint:disable-next-line: no-shadowed-variable
const appMiddleware = (store: any) => (next: (arg0: any) => void) => (
  action: any,
) => {
  //   var state = store.getState()
  //   switch (action.type) {
  //     case actions.ADD_TASK:
  //       *do something*
  //       break;
  //   }
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(rootReducer, compose(...enhancers));

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);

/*
 *--------------------------------------------------*
 * Reset persist store: persistor.purge()
 *--------------------------------------------------*
 */
