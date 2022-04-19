import { combineReducers  } from "redux";
import CartHandler from './cartHandler'

const CombinedReducer = combineReducers({
  CartHandler,
});

export default CombinedReducer 