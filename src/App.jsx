import Wrapper from "./Navigation/Wrapper";
import ModalContextProvider from "./Context/ModalContext";
import StateContextProvider from "./Context/StateContext";

export default function App() {
  return (
    <ModalContextProvider>
      <StateContextProvider>
        <Wrapper />
      </StateContextProvider>
    </ModalContextProvider>
  );
}
