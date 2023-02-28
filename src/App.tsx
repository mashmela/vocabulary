import React from "react";

import { translate, wrapper } from "./styles.css";

function App() {
  const [value, setValueInput] = React.useState("");
  const [valueTranslate, setTranslateValueInput] = React.useState("");

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setValueInput(event.target.value),
    [],
  );

  const handleInputTranslateChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setTranslateValueInput(event.target.value),
    [],
  );

  return (
    <div>
      <div className={wrapper}>
        <div className={translate}>
          <input value={value} onChange={handleInputChange} />
          <input value={valueTranslate} onChange={handleInputTranslateChange} />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
