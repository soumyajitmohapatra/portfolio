import React, { Suspense } from "react";
import { Button } from "./Button";
import { PagesProps } from "../../pages/pages";
import { FullScreenLoader } from "./FullScreenLoader";

interface TabProps {
  tabItems: PagesProps[];
}

export const Tabs: React.FC<TabProps> = ({ tabItems }) => {
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
      <Suspense fallback={<FullScreenLoader />}>
        {tabItems[selectedTab].content}
      </Suspense>
    </>
  );
};
