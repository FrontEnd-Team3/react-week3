import {
  DEL_INGREDIENT,
  useIngredientsStore,
} from "../../../../store/1_reducer";

const ReducerQ1List = () => {
  const [ingredients, ingredientsDispatch] = useIngredientsStore();
  return (
    <tbody>
      {[...ingredients].map((ingredient, id) => (
        <tr key={id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.price}</td>
          <td>
            <button
              onClick={() => ingredientsDispatch(DEL_INGREDIENT(ingredient.id))}
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
