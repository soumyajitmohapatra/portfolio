import React, { useState } from "react";
import "./ThemeSelector.scss";
import { Theme, useTheme } from "../../context/ThemeContext";
import { Button } from "./Button";
import { MdColorLens } from "react-icons/md";

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const themes = {
    default: {
      name: "Default",
      className: "theme-default",
    },
    blue: {
      name: "Blue",
      className: "theme-blue",
    },
    red: {
      name: "Red",
      className: "theme-red",
    },
    green: {
      name: "Green",
      className: "theme-green",
    },
    purple: {
      name: "Purple",
      className: "theme-purple",
    },
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsExpanded(false);
  };

  return (
    <div className="theme-selector">
      <div className={`theme-options ${isExpanded ? "expanded" : "collapsed"}`}>
        {Object.entries(themes).map(([key, { className }]) => (
          <Button
            key={key}
            className={`theme-option ${
              theme === key ? "active" : ""
            } ${className}`}
            onClick={() => handleThemeChange(key as Theme)}
            style={{
              background: `linear-gradient(135deg, var(--eerie-black-2) 50%, var(--primary-color) 50%)`,
            }}
            aria-labelledby={key}
          />
        ))}
      </div>
      <MdColorLens
        className={`theme-selector-button ${themes[theme]?.className}`}
        onClick={toggleExpansion}
      />
    </div>
  );
};

export default ThemeSelector;
