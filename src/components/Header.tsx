import { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: HeaderProps) {
  return <header className="header bg-light">{children}</header>;
}

export default Header;
