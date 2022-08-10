import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../types/action.types";

const checkLocalStorage = () => {
  return Object.assign(
    {},
    ...Object.entries(localStorage).map(([id, value]) => ({
      [id]: JSON.parse(JSON.stringify(value)),
    })),
  );
};

const initialState = {
  favorites: checkLocalStorage(),
};

const FavoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: { ...state.favorites, [action.payload._id]: action.payload },
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: Object.keys(state.favorites)
          .filter((item) => item !== action.payload)
          .reduce(
            (object, item) => ({ ...object, [item]: state.favorites[item] }),
            {},
          ),
      };
    default:
      return state;
  }
};

export default FavoritesReducer;
