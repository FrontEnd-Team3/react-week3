import { createContext, useContext, useState } from "react";

export const useModalStore = () => useContext(ModalStore);
const ModalStore = createContext();

const ModalStoreProvider = ({ children }) => {
  const [modal, setModal] = useState([false, false]);
  return (
    <ModalStore.Provider value={[modal, setModal]}>
      {children}
    </ModalStore.Provider>
  );
};
export default ModalStoreProvider;
