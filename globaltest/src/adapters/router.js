import { Navigate, createBrowserRouter } from "react-router-dom";
import ReducerQ1Page from "../domain/1_reducer/components/pages/Q1";
import ContextQ1Page from "../domain/2_context/components/pages/Q1";
import ContextQ2Page from "../domain/2_context/components/pages/Q2";
import IngredientsStoreProvider from "../store/1_reducer";
import ModalStoreProvider from "../store/2_context";
import UserListProvider from "../store/3_context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/1_reducer/q1"} />,
  },
  {
    path: "/1_reducer",
    children: [
      {
        path: "q1",
        element: (
          <IngredientsStoreProvider>
            <ReducerQ1Page />
          </IngredientsStoreProvider>
        ),
      },
    ],
  },
  {
    path: "/2_context",
    children: [
      {
        path: "q1",
        element: (
          <ModalStoreProvider>
            <ContextQ1Page />
          </ModalStoreProvider>
        ),
      },
      {
        path: "q2",
        element: (
          <UserListProvider>
            <ContextQ2Page />
          </UserListProvider>
        ),
      },
    ],
  },
]);
export default router;
