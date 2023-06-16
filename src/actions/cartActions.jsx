// actions.js
import axios from 'axios';

export const getFood = (id) => {
  return (dispatch) => {
    axios.get(`http://loaclhost:1000/food/menu/${id}`)
      .then((response) => {
        const items = response.data;
        dispatch(addToCart(items));
      })
      .catch((error) => {
        dispatch(falilureAddingToCart(error.message));
      });
  };
};

export const addToCart = (items) => {
  return {
    type: 'FETCH_ITEM_SUCCESS',
    payload: items,
  };
};

export const falilureAddingToCart = (error) => {
  return {
    type: 'FETCH_ITEM_FAILURE',
    payload: error,
  };
};

export const removeFromCart = (id) => {

}
