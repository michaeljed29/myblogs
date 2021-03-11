import {
  OPEN_FORM_MODAL,
  CLOSE_FORM_MODAL,
  SET_ALERT,
  REMOVE_ALERT,
} from "./types";

export const openFormModal = () => {
  return {
    type: OPEN_FORM_MODAL,
  };
};

export const closeFormModal = () => {
  return {
    type: CLOSE_FORM_MODAL,
  };
};

export const setAlert = (alert) => {
  return {
    type: SET_ALERT,
    payload: alert,
  };
};

export const removeAlert = () => {
  return {
    type: REMOVE_ALERT,
  };
};
