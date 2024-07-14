import React from "react";
import { Button } from "./Button";
import { Pages } from "../../pages/pages";

export interface TabItems {
  title: string;
  uId: string;
}

interface TabProps {
  tabItems: TabItems[];
  content: Pages[];
}

export const Tabs: React.FC<TabProps> = ({ tabItems, content }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          {tabItems.map((item, i) => (
            <li className="navbar-item" key={item.uId}>
              <Button
                className={`navbar-link ${selectedTab === i ? "active" : ""}`}
                onClick={() => setSelectedTab(i)}
              >
                {item.title}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      {content[selectedTab].content}
    </>
  );
};
