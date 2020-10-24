import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form'
import cartReducer from './cart';

const rootReducer = combineReducers({
  form: formReducer,
  cart: cartReducer,
});

export default rootReducer;
