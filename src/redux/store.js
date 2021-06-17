import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import shoesReducer from './reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

// const rootReducer = combineReducers({ shoesReducer });
// export const store = createStore(rootReducer, applyMiddleware(thunk));

const rootReducer = combineReducers({
    shoesReducer: persistReducer(persistConfig, shoesReducer)
  });
  
  export const store = createStore(rootReducer, applyMiddleware(thunk));
  export const persistor = persistStore(store);