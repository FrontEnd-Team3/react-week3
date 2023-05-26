import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isTextChange1, setIsTextChange1] = useState("보이기");
  const [isTextChange2, setIsTextChange2] = useState("보이기");

  return (
    <ModalContext.Provider
      value={{
        isModalOpen1,
        setIsModalOpen1,
        isModalOpen2,
        setIsModalOpen2,
        isTextChange1,
        setIsTextChange1,
        isTextChange2,
        setIsTextChange2,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
