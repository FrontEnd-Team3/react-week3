import { createContext, useContext, useReducer } from "react";

export const useIngredientStore = () => useContext(IngredientStore);

export const IngredientStore = createContext();

const initialstate = {
  ingredients: [
    { id: 1, name: "피자 도우", price: 1000 },
    { id: 2, name: "토마토 소스", price: 500 },
    { id: 3, name: "치즈", price: 1000 },
    { id: 4, name: "피망", price: 500 },
    { id: 5, name: "양파", price: 500 },
  ],
  inputValue: "",
};

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case "DELETE_INGREDIENT":
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload.id
        ),
      };
    case "UPDATE_INPUTVALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      throw new Error("오류오류");
  }
};

const IngredientStoreProvider = ({ children }) => {
  const [ingredients, dispatch] = useReducer(ingredientReducer, initialstate);
  return (
    <IngredientStore.Provider value={[ingredients, dispatch]}>
      {children}
    </IngredientStore.Provider>
  );
};

export default IngredientStoreProvider;
