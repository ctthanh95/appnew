
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const STATUS_LOGIN = 'STATUS_LOGIN';
export const STATUS_LOGOUT = 'STATUS_LOGOUT';
export const NAME_USER = 'NAME_USER';
export const PHONE_USER = 'PHONE_USER';
export const ADDRESS_USER = 'ADDRESS_USER';
export const PROVINCE_USER = 'PROVINCE_USER';
export const DISTRICT_USER = 'DISTRICT_USER';
export const WARDS_USER = 'WARDS_USER';
export const SUCCESS_CART = 'SUCCESS_CART';

export const SuccessCart = () => dispatch => {
  dispatch({
    type: SUCCESS_CART,
  });
};

export const ProvinceUser = (item) => dispatch => {
  dispatch({
    type: PROVINCE_USER,
    payload: item
  });
};

export const DistrictUser = (item) => dispatch => {
  dispatch({
    type: DISTRICT_USER,
    payload: item
  });
};

export const WardsUser = (item) => dispatch => {
  dispatch({
    type: WARDS_USER,
    payload: item
  });
};


export const AddressUser = (item) => dispatch => {
  dispatch({
    type: ADDRESS_USER,
    payload: item
  });
};

export const PhoneUser = (item) => dispatch => {
  dispatch({
    type: PHONE_USER,
    payload: item
  });
};

export const NameUser = (item) => dispatch => {
  dispatch({
    type: NAME_USER,
    payload: item
  });
};

export const StatusLogout = () => dispatch => {
  dispatch({
    type: STATUS_LOGOUT,
  });
};

export const StatusLogin = () => dispatch => {
  dispatch({
    type: STATUS_LOGIN,
  });
};

export const AddCart = item => dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
  };

export const RemoveCart = item => dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    });
  };

export const IncreseQuantity = item => dispatch => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: item
    });
  };

export const DecreseQuantity = item => dispatch => {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: item
    });
  };

  export const AddFavourite = item => dispatch => {
    dispatch({
      type: ADD_TO_FAVOURITE,
      payload: item
    });
  };

  export const RemoveFavourite = item => dispatch => {
    dispatch({
      type: REMOVE_FROM_FAVOURITE,
      payload: item
    });
  };