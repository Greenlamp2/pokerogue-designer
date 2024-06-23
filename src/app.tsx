import React from "react";
import useUiManager from "./hooks/useUiManager";

const App = () => {
  const { setMode } = useUiManager();
  return (
    <div>
      OK
    </div>
  );
};

export default App;
