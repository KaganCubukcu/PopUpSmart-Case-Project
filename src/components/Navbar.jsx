import React from "react";
import { useSelector } from "react-redux";
import { Logo } from "./style";
const Navbar = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <Logo
      style={{
        borderBottom: theme.darkTheme ? "1px solid white" : "1px solid #0d1b2a",
      }}
    >
      Kagan's Todo App
    </Logo>
  );
};

export default Navbar;
