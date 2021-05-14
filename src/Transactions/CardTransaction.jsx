import React from "react";

const CardTransaction = (props) => {
  let { data } = props;
  let { coinName, amount, total_paid, current_value, pl } = data;
  return (
    <div className="card-holding">
      <h2>
        {coinName}: {amount}
      </h2>
      <h2>
        Total Paid: ${total_paid}, Current Value: ${current_value}
      </h2>
      <h2>P/L: {pl}</h2>
    </div>
  );
};

export default CardTransaction;
