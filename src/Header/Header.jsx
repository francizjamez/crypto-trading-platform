import React from "react";
import { useState, useContext } from "react";
import "./Header.css";

//context
import CoinContext from "../_contexts/CoinContext";

const Header = () => {
  const { wallet } = useContext(CoinContext);

  const [porfolio, setPorfolio] = useState(0);
  return (
    <div className="Header">
      <h1> Earn some virtual money</h1>
      <p>To buy virtual food</p>
      <h3> Wallet: {wallet}</h3>
      <h2> Portfolio Value: {porfolio}</h2>
    </div>
  );
};

export default Header;
