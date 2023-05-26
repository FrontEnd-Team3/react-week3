import { createContext, useContext, useReducer } from "react";
import createAction from "../utils/create-action";

const initialState = [
  { id: 1, name: "홍길동", nickname: "히히", isEdit: false },
];

export const useUserList = () => useContext(UserList);
const UserList = createContext();

export const ADD = createAction("ADD");
export const EDIT = createAction("EDIT");
export const RESET = createAction("RESET");
export const CONSOLE = createAction("CONSOLE");

const userListReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "EDIT":
      return state.map((oneState) => ({ ...oneState, isEdit: true }));
    case "RESET":
      return initialState;
    case "CONSOLE":
      state
        .filter((oneState) => oneState.isEdit)
        .forEach((oneState) => console.log(oneState));
    default:
      return state;
  }
};

const UserListProvider = ({ children }) => {
  const [userList, userListDispatch] = useReducer(
    userListReducer,
    initialState
  );
  return (
    <UserList.Provider value={[userList, userListDispatch]}>
      {children}
    </UserList.Provider>
  );
};
export default UserListProvider;
