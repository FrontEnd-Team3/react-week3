import { useContext } from "react";
import { UserStore } from "../../../../../store/3_context";

const ContextQ2Form3 = () => {
  const [, userDispatch] = useContext(UserStore);

  const handleResetUser = (event) => {
    event.preventDefault();
    userDispatch({ type: "RESET_USER" });
  };

  return (
    <div>
      <h1>Q2Form3</h1>
      <button onClick={handleResetUser}>RESET</button>
    </div>
  );
};
export default ContextQ2Form3;
