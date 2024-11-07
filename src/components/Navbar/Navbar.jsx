import React from "react";
import { StyledNavbar } from "./StyledNavbar";

export const Navbar = ({ variant = "primary" }) => {
  return <StyledNavbar $variant={variant}></StyledNavbar>;
};
