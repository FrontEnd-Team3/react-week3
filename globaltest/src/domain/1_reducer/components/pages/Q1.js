import React from "react";
import NavigateButton from "../../../../components/NavigateButton";
import {
  ADD_INGREDIENT,
  DEL_INGREDIENT,
  useIngredientsStore,
} from "../../../../store/1_reducer";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";

const ReducerQ1Page = () => {
  const [ingredients, ingredientsDispatch] = useIngredientsStore();
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */

  return (
    <>
      <h2>문제 1</h2>
      <table>
        <thead>
          <tr>
            <th>재료</th>
            <th>가격</th>
          </tr>
        </thead>
        <ReducerQ1List />
      </table>
      <Q1Form
        onSubmit={(e) => {
          e.preventDefault();
          const newIngredient = {
            id: Math.floor(Math.random() * 1000),
            name: e.target.name.value,
            price: e.target.price.value,
          };
          e.target.name.value = e.target.price.value = null;
          ingredientsDispatch(ADD_INGREDIENT(newIngredient));
        }}
      />
      <NavigateButton isFirstPage to={"/2_context/q1"} />
    </>
  );
};
export default ReducerQ1Page;
