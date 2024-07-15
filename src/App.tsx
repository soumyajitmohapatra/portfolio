import React from "react";
import "./App.scss";
import { Tabs } from "./common/components/Tabs";
import { tabItems } from "./data/tabItems";
import { pages } from "./pages/pages";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggleButton from "./common/components/ThemeSelector";
import { IconContext } from "react-icons";
import { Sidebar } from "./common/components/Sidebar";

function App() {
  console.log(process.env.FORM_SPREE);

  return (
    <ThemeProvider>
      <IconContext.Provider
        value={{
          color: "var(--primary-color)",
        }}
      >
        <main>
          <Sidebar />
          <ThemeToggleButton />
          <div className="main-content">
            <Tabs tabItems={tabItems} content={pages} />
          </div>
        </main>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default App;
