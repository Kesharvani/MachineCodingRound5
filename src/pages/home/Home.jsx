import "./Home.css";
import { useRecipe } from "../../context/RecipeContextProvider";
import { Card } from "../../component/Card";
import { ACTION_TYPE } from "../../utils/constant";
import { AiFillFolderAdd } from "react-icons/ai";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export const Home = () => {
  const { state, dispatch } = useRecipe();

  const searchFilter =
    state.searchTerm === ""
      ? state.recipe
      : state.recipe.filter((item) => {
          if (state.radioValue === "name") {
            return item.name
              .toUpperCase()
              .includes(state.searchTerm.toUpperCase());
          } else if (state.radioValue === "ingredients") {
            return item.ingredients.includes(state.searchTerm);
          } else {
            return item.cuisine
              .toUpperCase()
              .includes(state.searchTerm.toUpperCase());
          }
        });

  const submit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <h1 className="header">Home</h1>
      <hr />
      <div className="filters_wrapper">
        <input
          type="search"
          placeholder="Search recipe by below filters"
          className="search"
          onChange={(e) =>
            dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value })
          }
        />
        <h4>filters:</h4>
        <label htmlFor="">
          <input
            type="radio"
            name="radioFilter"
            value="name"
            checked={state.radioValue === "name"}
            onChange={(e) => {
              dispatch({
                type: ACTION_TYPE.RADIOFILTER,
                payload: e.target.value
              });
            }}
          />
          Name
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="radioFilter"
            value="ingredients"
            onChange={(e) => {
              dispatch({
                type: ACTION_TYPE.RADIOFILTER,
                payload: e.target.value
              });
            }}
          />
          Ingredient
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="radioFilter"
            value="cuisine"
            onChange={(e) => {
              dispatch({
                type: ACTION_TYPE.RADIOFILTER,
                payload: e.target.value
              });
            }}
          />
          Cuisine
        </label>
      </div>
      <h3 className="header">All Recipes:</h3>
      <div className="card-main-wrapper">
        {searchFilter?.map((item) => {
          return (
            <div key={item.id}>
              <Card recipeItem={item} />
            </div>
          );
        })}
      </div>
      <div className="add_recipe_icon_wrapper">
        <Popup trigger={<AiFillFolderAdd size={50} />} modal>
          {(close) => (
            <div>
              <form onSubmit={submit} className="form">
                <label htmlFor="name">
                  Name of Recipe
                  <input type="text" required name="name" />
                </label>
                <label htmlFor="Cuisine">
                  Cuisine
                  <input type="text" required name="Cuisine" />
                </label>
                <label htmlFor="Image">
                  Image
                  <input type="file" required name="Image" />
                </label>
                <label htmlFor="ingredients">
                  ingredients
                  <input type="text" required name="ingredients" />
                </label>
                <label htmlFor="instructions">
                  instructions
                  <input type="text" required name="instructions" />
                </label>
                <button type="submit">Submit</button>
              </form>
              <button
                className="button"
                style={{ marginTop: "1rem", width: "100%" }}
                onClick={() => {
                  close();
                }}
              >
                close modal
              </button>
            </div>
          )}
        </Popup>
      </div>
    </>
  );
};
