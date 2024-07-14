import React from "react";
import { About } from "./About";
import { Resume } from "./Resume";
import { Contact } from "./Contact";

export interface Pages {
  uId: string;
  content: JSX.Element;
}

export const pages: Pages[] = [
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
