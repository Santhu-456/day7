import React, { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import DisplayCard from "./components/DisplayCard";
import ErrorBoundary from "./ErrorBoundary";
import './App.css'


const MainApp = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Switcher App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <ErrorBoundary>
        <DisplayCard theme={theme} />
      </ErrorBoundary>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <MainApp />
  </ThemeProvider>
);

export default App;
