import { useModalStore } from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const [modal, setModal] = useModalStore();
  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={() => setModal((prev) => [prev[0], !prev[1]])}>
        {modal[1] ? "숨기기" : "보이기"}
      </button>
    </>
  );
};
export default ContextQ1Detail2;
