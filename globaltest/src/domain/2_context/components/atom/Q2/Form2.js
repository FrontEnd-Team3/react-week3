import { useContext } from "react";
import { UserStore } from "../../../../../store/3_context";

const ContextQ2Form2 = () => {
  const [, userDispatch] = useContext(UserStore);

  const handleAddIsEditUser = (event) => {
    event.preventDefault();
    const newUserId = { id: 0 };
    userDispatch({ type: "NEWUSER_ADD_ISEDIT", payload: newUserId });
  };

  return (
    <div>
      <h1>Q2Form2</h1>
      <button onClick={handleAddIsEditUser}>STATUS 추가</button>
    </div>
  );
};
export default ContextQ2Form2;
