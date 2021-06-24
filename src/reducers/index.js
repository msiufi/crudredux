import {combineReducers} from 'redux';
import productosReducer from './procutosReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
  productos: productosReducer,
  alerta: alertaReducer
})