import React, { ReactNode } from "react";

export interface HeaderProps {
  headerTitle: string;
  headerElementName?: keyof JSX.IntrinsicElements;
  headerClassName?: string;
  children?: ReactNode;
}

export const Header = ({
  headerTitle,
  headerElementName = "h2",
  headerClassName,
  children,
}: HeaderProps) => {
  const Element = headerElementName;
  const className = children ? "d-flex align-baseline" : "";
  return (
    <header className={className}>
      <Element className={`${headerElementName} ${headerClassName} mr-1`}>
        {headerTitle}
      </Element>
      {children}
    </header>
  );
};
