import { useContext, useState } from "react";
import { UserStore } from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = () => {
  const [, userDispatch] = useContext(UserStore);

  const [inputName, setInputName] = useState("");
  const [inputNickName, setInputNickName] = useState("");

  const handleAddUser = (event) => {
    event.preventDefault();
    const newUser = { id: 0, name: inputName, nickname: inputNickName };
    userDispatch({ type: "ADD_USER", payload: newUser });
  };

  return (
    <div>
      <h1>Q2Form</h1>
      <input
        placeholder="name"
        name="name"
        onChange={(event) => {
          setInputName(event.target.value);
        }}
      />
      <input
        placeholder="nick-name"
        name="nick-name"
        onChange={(event) => {
          setInputNickName(event.target.value);
        }}
      />
      <button onClick={handleAddUser}>추가</button>
      <ContextQ2Form2 />
    </div>
  );
};
export default ContextQ2Form;
