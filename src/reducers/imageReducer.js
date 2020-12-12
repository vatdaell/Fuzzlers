import { FETCH_CAT, FETCH_DOG, FETCH_FOX } from '../actions';

const imageReducer  = (state = "", action) => {
    switch (action.type){
      case FETCH_CAT:
        return action.payload;

      case FETCH_DOG:
        return action.payload;

      case FETCH_FOX:
            return action.payload;
      
      default:
        return state
    }
}

export default imageReducer;