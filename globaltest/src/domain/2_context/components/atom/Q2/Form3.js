import { RESET, useUserList } from "../../../../../store/3_context";

const ContextQ2Form3 = () => {
  const [userList, userListDispatch] = useUserList();
  return (
    <div>
      <h1>Q2Form3</h1>
      <button onClick={() => userListDispatch(RESET())}>RESET</button>
    </div>
  );
};
export default ContextQ2Form3;
