import {
  OPEN_FORM_MODAL,
  CLOSE_FORM_MODAL,
  REMOVE_ALERT,
  SET_ALERT,
} from "../actions/types";

const initialState = {
  isOpenFormModal: false,
  isOpenAlert: false,
  alert: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FORM_MODAL:
      return {
        ...state,
        isOpenFormModal: true,
      };
    case CLOSE_FORM_MODAL:
      return {
        ...state,
        isOpenFormModal: false,
      };
    case SET_ALERT:
      return {
        ...state,
        isOpenAlert: true,
        alert: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        isOpenAlert: false,
        alert: {},
      };
    default:
      return state;
  }
};
