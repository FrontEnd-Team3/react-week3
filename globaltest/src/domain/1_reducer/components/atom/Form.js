import { useContext, useState } from "react";
import { IngredientStore } from "../../../../store/1_reducer";

const Q1Form = ({ onSubmit }) => {
  const [ingredients, dispatch] = useContext(IngredientStore);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientPrice, setIngredientPrice] = useState("");

  const handleAddIngredient = (event) => {
    event.preventDefault();
    if (ingredientName === "" || ingredientPrice === "") {
      return;
    }
    const newIngredient = {
      id: Math.floor(Math.random() * 100000),
      name: ingredientName,
      price: ingredientPrice,
    };
    dispatch({ type: "ADD_INGREDIENT", payload: newIngredient });
    setIngredientName("");
    setIngredientPrice("");
  };

  return (
    <form onSubmit={handleAddIngredient}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="재료"
          value={ingredientName}
          onChange={(event) => setIngredientName(event.target.value)}
        />
      </label>
      <label>
        <input
          type="number"
          name="price"
          placeholder="가격"
          value={ingredientPrice}
          onChange={(event) => setIngredientPrice(event.target.value)}
        />
      </label>
      <button type="submit">추가</button>
    </form>
  );
};
export default Q1Form;
