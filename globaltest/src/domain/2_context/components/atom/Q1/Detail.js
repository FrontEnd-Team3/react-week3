import { useContext } from "react";
import { ModalContext } from "../../../../../store/2_context";
import ContextQ1Detail2 from "./Detail2";

const ContextQ1Detail = () => {
  const modalContext = useContext(ModalContext);
  const { isModalOpen1, setIsModalOpen1, isTextChange1, setIsTextChange1 } =
    modalContext;

  const handleModalOpenToggle = () => {
    setIsModalOpen1(!isModalOpen1);
    setIsTextChange1(isModalOpen1 ? "숨기기" : "보이기");
  };
  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={handleModalOpenToggle}>{isTextChange1}</button>
      <ContextQ1Detail2 />
    </>
  );
};
export default ContextQ1Detail;
