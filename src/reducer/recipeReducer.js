import { ACTION_TYPE } from "../utils/constant";

export const initialValue = {
  recipe: [],
  searchTerm: "",
  radioValue: "name"
};

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        recipe: action.payload
      };
    case ACTION_TYPE.SEARCH:
      return {
        ...state,
        searchTerm: action.payload
      };
    case ACTION_TYPE.RADIOFILTER:
      return {
        ...state,
        radioValue: action.payload
      };
    case ACTION_TYPE.DELETE:
      return {
        ...state,
        recipe: state.recipe.filter((item) => item.id !== action.payload.id)
      };
    default:
      console.error("error in reducer function");
  }
};
