import React, { useContext } from "react";
import CoinContext from "../_contexts/CoinContext";
import CardHolding from "./CardHolding";
//css
import "./holdings.css";

const Holdings = () => {
  const { holdings } = useContext(CoinContext);
  return (
    <div className="stat">
      <h1>Current Holdings</h1>
      <div className="card-container">
        {holdings.map((coin) => (
          <CardHolding data={coin} />
        ))}
      </div>
    </div>
  );
};

export default Holdings;
