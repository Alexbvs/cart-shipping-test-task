import axios from 'axios';

export const fetchProduct = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios
    .get
    ('https://5f9038fce0559c0016ad647c.mockapi.io/product')
      .then(({ data }) => {
      const itemsData = data.map(item => ({
        ...item,
        selectedCount: 1
      }))
      dispatch(setProduct(itemsData));
    })

    //errorHandler
    // .catch(error => {
    //   dispatch({type: 'SELECTTED-ERORR', payload: error})
    // })
};

export const setProduct = (items) => ({
  type: 'SET_PRODUCT',
  payload: items,
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = (id) => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const minusCartItem = (id) => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});

export const setSelectedCount = (countData) => ({
  type: 'SET_SELECTED_COUNT',
  payload: countData,
});