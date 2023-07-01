import { createContext, useContext, useEffect, useReducer } from "react";
import { initialValue, recipeReducer } from "../reducer/recipeReducer";
import { ACTION_TYPE } from "../utils/constant";
import { recipe } from "../db/recipe";
export const RecipeContext = createContext();
export const RecipeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialValue);
  useEffect(() => {
    dispatch({ type: ACTION_TYPE.SUCCESS, payload: recipe });
  }, []);
  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);
