import { useContext } from "react";
import { IngredientStore } from "../../../../store/1_reducer";

const ReducerQ1List = () => {
  const [ingredients, dispatch] = useContext(IngredientStore);

  const handleDeleteIngredient = (ingredientId) => {
    dispatch({ type: "DELETE_INGREDIENT", payload: { id: ingredientId } });
  };

  return (
    <tbody>
      {ingredients.ingredients.map((ingredient) => (
        <tr key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button
              onClick={() => {
                handleDeleteIngredient(ingredient.id);
              }}
            >
              삭제
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ReducerQ1List;
