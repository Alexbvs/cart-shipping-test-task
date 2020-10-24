let initialState = {
  items: [],
  totalPrice: 0,
  isLoaded: false,
};

const getTotalSum = (items) => {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {

    totalPrice += (items[i].selectedCount * items[i].price)
  }
  return totalPrice;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {


    case 'SET_PRODUCT':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
        totalPrice: getTotalSum(action.payload)
      };

    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,

      };

    case 'REMOVE_CART_ITEM': {
      const newItems = [
        ...state.items
      ];
      const newItemsArray = newItems.filter(item => item.id !== action.payload)
      return {
        ...state,
        items: newItemsArray,
        totalPrice: getTotalSum(newItemsArray)
      };
    }

    case 'PLUS_CART_ITEM': {
      state.items.map(item => {
        if (item.id === action.payload && item.selectedCount <= 49) {
          return item.selectedCount += 1;
        } else {
          return null
        }
      });

      return {
        ...state,
        totalPrice: getTotalSum(state.items),
      };
    }

    case 'MINUS_CART_ITEM': {
      state.items.map(item => {
        if (item.id === action.payload && item.selectedCount > 1) {
          return item.selectedCount -= 1;
        } else {
          return null
        }
      });

      return {
        ...state,
        totalPrice: getTotalSum(state.items),
      };
    }

    case 'SET_SELECTED_COUNT': {
      const { val, id } = action.payload
      state.items.map(item => {
        if (item.id === id && val > 0 && val <= 50) {
          return item.selectedCount = val;
        } else if (item.id === id && val === '') {
          return item.selectedCount = 1
        } else {
          return null
        }
      });

      return {
        ...state
      }
    }

    default:
      return state;
  }
};

export default cartReducer;