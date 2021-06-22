import {combineReducers} from 'redux';
import productosReducer from './procutosReducer';

export default combineReducers({
  productos: productosReducer
})