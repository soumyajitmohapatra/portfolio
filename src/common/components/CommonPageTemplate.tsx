import React, { ReactNode } from "react";
import { Header } from "./Header";

interface CommonPageTemplateProps {
  articleTitle: string;
  articleClassName: string;
  children: ReactNode;
  isActive: boolean;
  icon?: ReactNode;
}

export const CommonPageTemplate: React.FC<CommonPageTemplateProps> = ({
  articleTitle,
  articleClassName,
  children,
  isActive = false,
  icon,
}) => {
  return (
    <article className={`${articleClassName}  ${isActive ? "active" : ""}`}>
      <Header headerTitle={articleTitle} headerClassName="article-title">
        {icon}
      </Header>
      {children}
    </article>
  );
};
