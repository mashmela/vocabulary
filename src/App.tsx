import React from "react";

import {
  translate,
  wrapper,
  vocabulary,
  word,
  inputStyle,
  buttonStyle,
  imageDelete,
  vocabularyWrapper,
  tegs,
  wrapperWords,
  wrapperDelete,
} from "./styles.css";

function App() {
  const [value, setValueInput] = React.useState("");
  const [valueTranslate, setTranslateValueInput] = React.useState("");
  const [newTranslate, setNewTranslate] = React.useState<storageTranslate[]>(() => {
    const storageData = localStorage.getItem("data");
    return storageData ? JSON.parse(storageData) : [];
  });

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
      const newStorage = [...newTranslate, { first: value, second: valueTranslate }];
      setNewTranslate(newStorage);
      setValueInput("");
      setTranslateValueInput("");
      localStorage.setItem("data", JSON.stringify(newStorage));
    }
  }, [newTranslate, value, valueTranslate]);

  const handleDeleteClick = React.useCallback(
    (id: number) => {
      const newStorage = [...newTranslate];
      newStorage.splice(id, 1);
      setNewTranslate(newStorage);
      localStorage.setItem("data", JSON.stringify(newStorage));
    },
    [newTranslate],
  );

  return (
    <div>
      <div className={wrapper}>
        <div className={translate}>
          <input
            className={inputStyle}
            value={value}
            placeholder={"Слово"}
            onChange={handleInputWordChange}
          />
          <input
            className={inputStyle}
            value={valueTranslate}
            placeholder={"Перевод"}
            onChange={handleInputTranslateChange}
          />
          <button className={buttonStyle} onClick={handleButtonClick}>
            Добавить
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
