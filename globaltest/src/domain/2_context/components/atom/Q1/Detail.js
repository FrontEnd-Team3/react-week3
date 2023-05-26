import { useModalStore } from "../../../../../store/2_context";
import ContextQ1Detail2 from "./Detail2";

const ContextQ1Detail = () => {
  const [modal, setModal] = useModalStore();
  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={() => setModal((prev) => [!prev[0], prev[1]])}>
        {modal[0] ? "숨기기" : "보이기"}
      </button>
      <ContextQ1Detail2 />
    </>
  );
};
export default ContextQ1Detail;
