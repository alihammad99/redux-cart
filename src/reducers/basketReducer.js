import {
  ADD_PRODUCT_TO_BASKET,
  DECREASE_QUANTITY,
  GET_NUMBERS,
  INCREASE_QUANTITY,
  DELETE,
} from "../actions/types";

const initialState = {
  basketNumber: 0,
  cartCost: 0,
  products: {
    greyTshirt: {
      name: "Grey Tshirt",
      tagName: "greyTshirt",
      price: 12.0,
      numbers: 0,
      inCart: false,
    },
    greyHoddie: {
      name: "Grey Hoddie",
      tagName: "greyHoddie",
      price: 35.0,
      numbers: 0,
      inCart: false,
    },
    blackTshirt: {
      name: "Black Tshirt",
      tagName: "blackTshirt",
      price: 14.0,
      numbers: 0,
      inCart: false,
    },
    blackHoddie: {
      name: "Black Hoddie",
      tagName: "blackHoddie",
      price: 35.0,
      numbers: 0,
      inCart: false,
    },
  },
};

const basketReducer = (state = initialState, action) => {
  let productSelected;
  switch (action.type) {
    case GET_NUMBERS:
      return {
        ...state,
      };
    case ADD_PRODUCT_TO_BASKET:
      productSelected = { ...state.products[action.payload] };
      if (!productSelected.inCart) {
        state.basketNumber += 1;
      }
      productSelected.inCart = true;
      productSelected.numbers += 1;

      return {
        ...state,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCart = 0;
      if (productSelected.numbers === 1) {
        productSelected.numbers = 1;
        newCart = state.cartCost;
      } else {
        productSelected.numbers -= 1;
        newCart = state.cartCost - state.products[action.payload].price;
      }

      return {
        ...state,
        basketNumbers: state.basketNumbers - 1,
        cartCost: newCart,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case DELETE:
      productSelected = { ...state.products[action.payload] };
      // productSelected.numbers = 0;
      // productSelected.price = 0;
      let numberBackup = productSelected.numbers;
      let priceBackup = numberBackup * productSelected.price;
      productSelected.numbers = 0;
      productSelected.inCart = false;

      return {
        ...state,
        basketNumber: state.basketNumber - 1,
        cartCost: state.cartCost - priceBackup,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    default:
      return state;
  }
};

export default basketReducer;
