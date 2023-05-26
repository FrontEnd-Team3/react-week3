import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import { ModalProvider } from "./store/2_context";
import UserStoreProvider from "./store/3_context";

function App() {
  return (
    <ModalProvider>
      <UserStoreProvider>
        <RouterProvider router={router} />
      </UserStoreProvider>
    </ModalProvider>
  );
}

export default App;
