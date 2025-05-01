import { styled } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <StyledNavLink to={"/profile"}>Profile</StyledNavLink>
        <StyledNavLink to={"/repositories"}>Repositories</StyledNavLink>
        <StyledNavLink to={"/user"}>Other users</StyledNavLink>
      </nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled("header")(() => ({
  backgroundColor: " #f8f8f8",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",

  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
}));

const StyledNavLink = styled(NavLink)(() => ({
  fontSize: "1rem",
  color: "#007bff",
  textDecoration: "none",
  padding: "8px 15px",
  borderRadius: " 5px",
  transition: " background-color 0.3s ease",

  "&.active": {
    backgroundColor: "#007bff",
    color: "#fff",
  },

  "&:hover": {
    backgroundColor: "#a3cffc",
  },
}));
