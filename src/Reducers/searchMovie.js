/* Reducer for the search movie component
*  The user will search for a specific movie
*  UI updated returning the film 
*/
import { SEARCH_MOVIES } from '../Actions/actions';
// setting the state for the component search movies 
const originalState = {
    list: [],
    movie: null
}

export default function(state = originalState, action) {
    switch (action.type) {
        case SEARCH_MOVIES:
        return {
            ...state,
            list: action.payload
        }
        default:
        return state;
    }
}