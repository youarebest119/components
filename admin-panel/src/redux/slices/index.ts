import { combineReducers } from 'redux';
import { LoadingSlice } from './loading.slice';

/**COMBINE ALL REDUCERS */
const reducers = combineReducers({
    loading: LoadingSlice.reducer,
});
export default reducers;