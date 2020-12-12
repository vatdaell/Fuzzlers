import {FETCH_CAT, FETCH_DOG} from '../actions';

const imageReducer  = (state = "", action) => {
    switch (action.type){
      case FETCH_CAT:
        return action.payload;

      case FETCH_DOG:
        return action.payload;
        
      default:
        return state
    }
}

export default imageReducer;