import React, { useState } from 'react';
import './App.css';

import Selector from './components/Selector/Selector';
import InputForm from './components/InputForm/InputForm';
import Button from './components/Button/Button';

const DEPARTMENS = [
  "Отдел маркетинга",
  "Отдел разработки",
  "Бухгалтерия",
];

function App() {
  const [selectedDepartment, setSelectedDepartment] = useState(DEPARTMENS[0]);

  function handleSelectDepartment(event) {
    setSelectedDepartment(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-header">Обращение к отделам</h1>
      </header>

      <main>
        <div className="department-selector__wrapper">
          <Selector
            id="department-selector"
            options={DEPARTMENS}
            onChange={handleSelectDepartment}
            defaultValue={selectedDepartment}
            className="department-selector"
            label={"К какому отделу ваше обращение?"}
          />
          <InputForm
            placeholder={`Вы обращаетесь в ${selectedDepartment}. Опишите проблему здесь.`}
            id="department-textarea"
            className="department-textarea"
            rows="3"
          />
          <Button
            text="Я ничего не делаю"
            id="department-btn"
            className="department-btn"
          />
        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
