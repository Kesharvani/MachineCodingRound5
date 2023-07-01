import "./RecipeDetailPage.css";
import { useParams } from "react-router-dom";
import { useRecipe } from "../../context/RecipeContextProvider";
export const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const { state } = useRecipe();
  const recipeItem = state.recipe.find((item) => item.id === recipeId);

  return (
    <>
      <h1 className="header">Recipe Detail Page</h1>
      <hr />
      <div className="detail_wrapper">
        <img
          src={recipeItem?.image}
          alt="recipeImage"
          height="300px"
          width="300px"
        />
        <div>
          <div className="detail_text_wrapper">
            <p>Cuisine type:</p>
            <p>{recipeItem?.cuisine}</p>
          </div>
          <div className="detail_text_wrapper">
            <p>ingredients:</p>
            <p>{recipeItem?.ingredients}</p>
          </div>
          <div className="detail_text_wrapper">
            <p>instructions</p>
            <ol>
              {recipeItem?.instructions.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
