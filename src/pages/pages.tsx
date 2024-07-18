import React, { lazy, ReactNode } from "react";

const About = lazy(() => import("./About"));
const Resume = lazy(() => import("./Resume"));
const Contact = lazy(() => import("./Contact"));

export interface PagesProps {
  uId: string;
  content: ReactNode;
}

export const pages: PagesProps[] = [
  {
    uId: "about",
    content: <About />,
  },
  {
    uId: "resume",
    content: <Resume />,
  },
  {
    uId: "contact",
    content: <Contact />,
  },
];
