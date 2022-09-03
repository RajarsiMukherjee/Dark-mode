import logo from './logo.svg';
import './App.css';
import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext';
import SwitchButton from './Button';

 
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h1>
      <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <SwitchButton />
    </div>
  );
}

export default App;
