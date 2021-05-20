import React, { useContext } from "react";
import CoinContext from "../_contexts/CoinContext";
//components
import CardTransaction from "./CardTransaction";

const Transactions = () => {
  const { transactions } = useContext(CoinContext);
  return (
    <div className="stat">
      <h1>Transactions</h1>
      <div
        className="card-container"
        style={{ flexDirection: "column-reverse" }}
      >
        {transactions.map((transaction) => (
          <CardTransaction data={transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
