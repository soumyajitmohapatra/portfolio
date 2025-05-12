import React from "react";
import "./App.scss";
import { Tabs } from "./common/components/Tabs";
import { pages } from "./pages/pages";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggleButton from "./common/components/ThemeSelector";
import { IconContext } from "react-icons";
import { Sidebar } from "./common/components/Sidebar";
import { InstallPrompt } from "./core/InstallPrompt";

function App() {
  return (
    <ThemeProvider>
      <IconContext.Provider
        value={{
          color: "var(--primary-color)",
        }}
      >
        <InstallPrompt />
        <main>
          <Sidebar />
          <ThemeToggleButton />
          <div className="main-content">
            <Tabs tabItems={pages} />
          </div>
        </main>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
