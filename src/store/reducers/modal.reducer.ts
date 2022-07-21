import { SHOW_MODAL, HIDE_MODAL } from "../types/action.types";

const initialState = {
  modalType: null,
  modalProps: {},
};

const ModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps,
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default ModalReducer;
