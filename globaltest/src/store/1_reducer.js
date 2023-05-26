import { useReducer } from "react";
import { createContext, useContext } from "react";
import createAction from "../utils/create-action";

const initialState = [
  { id: 1, name: "피자 도우", price: 1000 },
  { id: 2, name: "토마토 소스", price: 500 },
  { id: 3, name: "치즈", price: 1000 },
  { id: 4, name: "피망", price: 500 },
  { id: 5, name: "양파", price: 500 },
];

export const useIngredientsStore = () => useContext(IngredientsStore);
const IngredientsStore = createContext();

export const ADD_INGREDIENT = createAction("ADD_INGREDIENT");
export const DEL_INGREDIENT = createAction("DEL_INGREDIENT");

const ingredientsStoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return [...state, action.payload];
    case "DEL_INGREDIENT":
      return state.filter((ingredient) => ingredient.id !== action.payload);
    default:
      return state;
  }
};

const IngredientsStoreProvider = ({ children }) => {
  const [ingredients, ingredientsDispatch] = useReducer(
    ingredientsStoreReducer,
    initialState
  );
  return (
    <IngredientsStore.Provider value={[ingredients, ingredientsDispatch]}>
      {children}
    </IngredientsStore.Provider>
  );
};
export default IngredientsStoreProvider;
