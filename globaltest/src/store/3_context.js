import { createContext, useContext, useReducer } from "react";

export const useUserStore = () => useContext(UserStore);

export const UserStore = createContext();

const initialstate = {
  users: [{ id: 1, name: "홍길동", nickname: "히히" }],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "NEWUSER_ADD_ISEDIT":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              isEdit: true,
            };
          }
          return user;
        }),
      };
    case "RESET_USER":
      return initialstate;
    case "SUBMIT_USER":
      const editedUsers = state.users.filter((user) => user.isEdit === true);
      console.log(editedUsers);
      return state;
    default:
      throw new Error("오류오류");
  }
};

const UserStoreProvider = ({ children }) => {
  const [users, userDispatch] = useReducer(userReducer, initialstate);
  return (
    <UserStore.Provider value={[users, userDispatch]}>
      {children}
    </UserStore.Provider>
  );
};

export default UserStoreProvider;
