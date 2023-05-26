import { EDIT, useUserList } from "../../../../../store/3_context";

const ContextQ2Form2 = () => {
  const [userList, userListDispatch] = useUserList();
  return (
    <div>
      <h1>Q2Form2</h1>
      <button
        type="button"
        onClick={() => {
          userListDispatch(EDIT());
        }}
      >
        STATUS 추가
      </button>
    </div>
  );
};
export default ContextQ2Form2;
