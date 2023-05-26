import { useContext } from "react";
import { ModalContext } from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const modalContext = useContext(ModalContext);
  const { isModalOpen2, setIsModalOpen2, isTextChange2, setIsTextChange2 } =
    modalContext;

  const handleModalOpenToggle = () => {
    setIsModalOpen2(!isModalOpen2);
    setIsTextChange2(isModalOpen2 ? "숨기기" : "보이기");
  };

  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={handleModalOpenToggle}>{isTextChange2}</button>
    </>
  );
};
export default ContextQ1Detail2;
