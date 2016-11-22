import { combineReducers } from 'redux';

// Reducers
import layerReducer from './containers/layer/reducer';

// Combine Reducers
var reducers = combineReducers({
	layerReducer: layerReducer
});

export default reducers;
