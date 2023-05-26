import { ADD, useUserList } from "../../../../../store/3_context";
import ContextQ2Form2 from "./Form2";

const ContextQ2Form = () => {
  const [userList, userListDispatch] = useUserList();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newUser = {
          id: Math.floor(Math.random() * 1000),
          name: e.target.name.value,
          nickname: e.target.nickname.value,
          isEdit: false,
        };
        userListDispatch(ADD(newUser));
        console.log(userList);
      }}
    >
      <h1>Q2Form</h1>
      <input placeholder="name" name="name" />
      <input placeholder="nick-name" name="nickname" />
      <button>추가</button>
      <ContextQ2Form2 />
    </form>
  );
};
export default ContextQ2Form;
