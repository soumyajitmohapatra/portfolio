import React, { lazy, ReactNode } from "react";

const Portfolio = lazy(() => import("./Portfolio"));
const About = lazy(() => import("./About"));
const Resume = lazy(() => import("./Resume"));
const Contact = lazy(() => import("./Contact"));

export interface PagesProps {
  uId: string;
  content: ReactNode;
  title: string;
}

export const pages: PagesProps[] = [
  {
    uId: "about",
    content: <About />,
    title: "About",
  },
  {
    uId: "resume",
    content: <Resume />,
    title: "Resume",
  },
  {
    uId: "projects",
    content: <Portfolio />,
    title: "Project",
  },
  {
    uId: "contact",
    content: <Contact />,
    title: "Contact",
  },
];
