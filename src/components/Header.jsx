import React from "react";
import MoneyVector from "../assets/vecteezy_data-vault-secure-water-resource-management_55061274.png";

function Header() {
  return (
    <header id="header">
      <img src={MoneyVector} alt="Money vector" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
