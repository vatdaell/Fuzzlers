import {FETCH_CAT} from '../actions';

const imageReducer  = (state = "", action) => {
    switch (action.type){
      case FETCH_CAT:
        return action.payload;
      default:
        return state
    }
}

export default imageReducer;