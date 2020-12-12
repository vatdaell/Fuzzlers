export const FETCH_CAT = 'FETCH_CAT';
export const PRE_FETCH_CAT = 'PRE_FETCH_CAT';
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';

export const FETCH_DOG = 'FETCH_DOG';
export const PRE_FETCH_DOG = 'PRE_FETCH_DOG';
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';

export const fetchCat = payload => {
    return {
      type: FETCH_CAT,
      payload: payload,
    }
}

export const fetchDog = payload => {
  return {
    type: FETCH_DOG,
    payload: payload,
  }
}