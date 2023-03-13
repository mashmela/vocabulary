import React from "react";

import {
  translate,
  wrapper,
  vocabulary,
  word,
  inputWords,
  buttonAdd,
  imageDelete,
  vocabularyWrapper,
  tegs,
  wrapperWords,
  wrapperDelete,
} from "./styles.css";

function App() {
  const [value, setValueInput] = React.useState("");
  const [valueTranslate, setTranslateValueInput] = React.useState("");
  const [newTranslate, setNewTranslate] = React.useState<storageTranslate[]>([
    { first: "cat", second: "кошка" },
  ]);

  interface storageTranslate {
    first: string;
    second: string;
  }

  const handleInputWordChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setValueInput(event.target.value),
    [],
  );

  const handleInputTranslateChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setTranslateValueInput(event.target.value),
    [],
  );

  const handleButtonClick = React.useCallback(() => {
    if (value && valueTranslate) {
      setNewTranslate([...newTranslate, { first: value, second: valueTranslate }]);
      setValueInput("");
      setTranslateValueInput("");
    }
  }, [newTranslate, value, valueTranslate]);

  const handleDeleteClick = React.useCallback(
    (id: number) => {
      const newStorage = [...newTranslate];
      newStorage.splice(id, 1);
      setNewTranslate(newStorage);
    },
    [newTranslate],
  );

  return (
    <div>
      <div className={wrapper}>
        <div className={translate}>
          <input
            className={inputWords}
            value={value}
            placeholder={"Слово"}
            onChange={handleInputWordChange}
          />
          <input
            className={inputWords}
            value={valueTranslate}
            placeholder={"Перевод"}
            onChange={handleInputTranslateChange}
          />
          <button className={buttonAdd} onClick={handleButtonClick}>
            Add
          </button>
        </div>
        <div className={vocabularyWrapper}>
          <div className={tegs}>
            <div className={wrapperDelete}>Слово</div>
            <div className={wrapperDelete}>Перевод</div>
            <div className={wrapperDelete}></div>
          </div>

          {newTranslate.map((item, id) => (
            <div className={vocabulary} key={id}>
              <div className={wrapperWords}>
                <div className={word}>{item.first}</div>
              </div>
              <div className={wrapperWords}>
                <div className={word}>{item.second}</div>
              </div>
              <div className={wrapperDelete} onClick={() => handleDeleteClick(id)}>
                <img className={imageDelete} src="/images/delete.png" alt="Delete" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
