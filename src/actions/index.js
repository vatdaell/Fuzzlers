export const FETCH_CAT = 'FETCH_CAT';
export const PRE_FETCH_CAT = 'PRE_FETCH_CAT';
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';

export const fetchCat = payload => {
    return {
      type: FETCH_CAT,
      payload: payload,
    }
}