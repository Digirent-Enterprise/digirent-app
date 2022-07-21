import { SHOW_MODAL, HIDE_MODAL } from "../types/action.types";

export const showModal = () => ({
  type: SHOW_MODAL,
  payload: value,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
  payload: value,
});
