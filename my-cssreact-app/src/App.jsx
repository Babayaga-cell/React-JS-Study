import "./App.css";

// How to style react components with css
// ----------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

import Button from "./Button";
import ButtonModule from "./Button/ButtonModule";
import ButtonInline from "./ButtonInline";

function App() {
  return (
    <>
      <Button />
      <ButtonModule />
      <ButtonInline />
    </>
  );
}

export default App;
