import { combineReducers } from 'redux';
import txtSlice from './theme';
import colorSlice from './colorSlice';

const rootReducer = combineReducers({
    txtSlice: txtSlice.reducer,
    colorSlice: colorSlice.reducer
});

export default rootReducer;