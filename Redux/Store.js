import {configureStore} from '@reduxjs/toolkit';
import CSlice from './CreditDebitRedux/CSlice';
import UserSlice from './UserRedux/UserSlice';
import storage from 'redux-persist/lib/storage'

import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
let rootReducer = combineReducers({cslice: CSlice, userSlice: UserSlice});


let persistConfig={
    key:'root',
    storage
}
let persistedReducer = persistReducer(persistConfig ,rootReducer);

const Store = configureStore({
  reducer: persistedReducer,
});
export default Store;
