import {
  ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY,
  ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE,
  STATUS_LOGIN, STATUS_LOGOUT,
  NAME_USER, PHONE_USER, ADDRESS_USER,
  WARDS_USER, DISTRICT_USER, PROVINCE_USER,
  SUCCESS_CART
} from './actions';

const initialState = {
  Carts: [],
  numberCarts: 0,
  autoId: 0,
  totalPrice: 0,
  Favourites: [],
  login: false,
  nameuser: null,
  // 
  phonenumber: null,
  addressuser: null,
  provinceuser: null,
  districtuser: null,
  wardsuser: null,
};

function shoesReducer(state = initialState, action) {

  switch (action.type) {

    case SUCCESS_CART:
      return {
        ...state,
        Carts: [],
        numberCarts: 0,
        totalPrice: 0,
      }

    case PROVINCE_USER:
      return {
        ...state,
        provinceuser: action.payload
      }

    case DISTRICT_USER:
      return {
        ...state,
        districtuser: action.payload
      }

    case WARDS_USER:
      return {
        ...state,
        wardsuser: action.payload
      }


    case ADDRESS_USER:
      return {
        ...state,
        addressuser: action.payload
      }

    case PHONE_USER:
      return {
        ...state,
        phonenumber: action.payload
      }

    case NAME_USER:
      return {
        ...state,
        nameuser: action.payload
      }

    case STATUS_LOGIN:
      return {
        ...state,
        login: true
      }

    case STATUS_LOGOUT:
      return {
        ...state,
        login: false,
        nameuser: null,
        phonenumber: null,
        addressuser: null,
        provinceuser: null,
        districtuser: null,
        wardsuser: null,
      }

    case ADD_TO_CART:
      var exists = false
      state.Carts.map(cartProduct => {
        if (cartProduct.id == action.payload.id && cartProduct.size == action.payload.size) {
          exists = true
          cartProduct.quantity += 1;
        }
      })
      if (exists == false) {
        state.Carts.push(action.payload)
      }
      return {
        ...state,
        Carts: [...state.Carts],
        numberCarts: state.numberCarts + 1,
        autoId: state.autoId + 1,
        totalPrice: state.totalPrice + action.payload.price
      };

    case REMOVE_FROM_CART:
      let quantity_ = action.payload.quantity;
      let price_ = action.payload.price
      return {
        ...state,
        Carts: state.Carts.filter(cartProduct => cartProduct.idCart !== action.payload.idCart),
        numberCarts: state.numberCarts - quantity_,
        totalPrice: state.totalPrice - (quantity_ * price_),
      };

    case INCREASE_QUANTITY:
      action.payload.quantity++;
      return {
        ...state,
        Carts: [...state.Carts],
        numberCarts: state.numberCarts + 1,
        totalPrice: state.totalPrice + action.payload.price,
      }

    case DECREASE_QUANTITY:
      if (action.payload.quantity > 1) {
        action.payload.quantity--;
        return {
          ...state,
          Carts: [...state.Carts],
          numberCarts: state.numberCarts - 1,
          totalPrice: state.totalPrice - action.payload.price,
        }
      }

    case ADD_TO_FAVOURITE:
      return { ...state, Favourites: [...state.Favourites, action.payload] };

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        Favourites: state.Favourites.filter(book => book.id !== action.payload.id)
      };

    default:
      return state;
  }
}

export default shoesReducer;