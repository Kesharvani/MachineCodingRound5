import "./Card.css";
import { FaGreaterThan } from "react-icons/fa";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useRecipe } from "../context/RecipeContextProvider";
import { ACTION_TYPE } from "../utils/constant";
export const Card = ({ recipeItem }) => {
  const { dispatch } = useRecipe();
  const navigate = useNavigate();
  return (
    <div className="card_wrapper">
      <img
        src={recipeItem?.image}
        alt="recipeImage"
        height="200px"
        width="200px"
        onClick={() => navigate(`/${recipeItem.id}`)}
      />
      <div className="icon_wrapper">
        <AiFillDelete
          size={20}
          onClick={() =>
            dispatch({ type: ACTION_TYPE.DELETE, payload: recipeItem })
          }
        />
        <AiFillEdit size={20} />
      </div>
      <h3>{recipeItem?.name}</h3>
      <div className="text_wrapper">
        <p>Cuisine type:</p>
        <p>{recipeItem?.cuisine}</p>
      </div>
      <div className="text_wrapper">
        <p>ingredients:</p>
        <p onClick={() => navigate(`/${recipeItem.id}`)} className="paragraph">
          See recipe <FaGreaterThan size={10} />
        </p>
      </div>
      <div className="text_wrapper">
        <p>instructions</p>
        <p onClick={() => navigate(`/${recipeItem.id}`)} className="paragraph">
          See recipe <FaGreaterThan size={10} />
        </p>
      </div>
    </div>
  );
};
