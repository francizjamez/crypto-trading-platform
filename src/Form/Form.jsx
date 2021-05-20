import "./Form.css";
import { useState, useContext, useEffect } from "react";
//contexts
import CoinContext from "../_contexts/CoinContext";

const Form = () => {
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("buy");
  const [disableButton, setDisableButton] = useState(false);
  const [totalPayment, setTotalPayment] = useState(0);
  const [max, setMax] = useState(0);

  const {
    currentCoin,
    showForm,
    setShowForm,
    wallet,
    setWallet,
    setHoldings,
    holdings,
    setTransactions,
  } = useContext(CoinContext);

  const { name, market_data } = currentCoin;
  const currentPrice = market_data ? market_data.current_price.usd : 0;

  useEffect(() => {
    setMax((wallet / currentPrice).toFixed(6));
    setTransactionType("buy");
  }, [showForm]);

  useEffect(() => {
    setTotalPayment((currentPrice * amount).toFixed(2));
    switch (transactionType) {
      case "buy":
        setMax((wallet / currentPrice).toFixed(6));
        if ((currentPrice * amount).toFixed(2) > wallet) {
          setDisableButton(true);
        } else {
          setDisableButton(false);
        }
        break;
      case "sell":
        let amountLimit = holdings.find((el) => el.coinName === name).amount;
        setMax(amountLimit);

        if (amount > amountLimit) {
          setDisableButton(true);
        } else {
          setDisableButton(false);
        }

        break;
    }
  }, [transactionType]);

  useEffect(() => {
    setTotalPayment((currentPrice * amount).toFixed(2));
    switch (transactionType) {
      case "buy":
        if ((currentPrice * amount).toFixed(2) > wallet) {
          setDisableButton(true);
        } else {
          setDisableButton(false);
        }
        break;
      case "sell":
        if (amount > max) {
          setDisableButton(true);
        } else {
          setDisableButton(false);
        }
        break;
      default:
        break;
    }
  }, [amount, showForm]);

  const checkAmount = (e) => {
    setAmount(e.target.value);
  };

  const performTransaction = (e) => {
    e.preventDefault();
    switch (transactionType) {
      case "buy":
        setWallet(wallet - totalPayment);

        setHoldings((prev) => {
          const newHoldings = JSON.parse(JSON.stringify(prev));
          const target = newHoldings.find((el) => el.coinName === name);
          target.amount += Number(amount);
          target.total_paid += Number(totalPayment);

          return newHoldings;
        });

        setTransactions((prev) => {
          let newTransactions = JSON.parse(JSON.stringify(prev));
          let createTransaction = {
            coinName: name,
            amount,
            total_paid: totalPayment,
            current_value: currentPrice,
            date: new Date(),
            isBuy: transactionType === "buy" ? true : false,
          };

          return [...newTransactions, createTransaction];
        });

        break;
      case "sell":
        setWallet((Number(wallet) + Number(totalPayment)).toFixed(2));

        setHoldings((prev) => {
          const newHoldings = JSON.parse(JSON.stringify(prev));
          const target = newHoldings.find((el) => el.coinName === name);
          target.amount -= Number(amount);
          target.total_paid -= Number(totalPayment);

          return newHoldings;
        });

        setTransactions((prev) => {
          let newTransactions = JSON.parse(JSON.stringify(prev));
          let createTransaction = {
            coinName: name,
            amount,
            total_paid: totalPayment,
            current_value: currentPrice,
            date: new Date(),
            isBuy: transactionType === "buy" ? true : false,
          };

          return [...newTransactions, createTransaction];
        });

        break;

      default:
        break;
    }
    setShowForm(false);
  };
  return (
    showForm && (
      <div className="wrapper">
        <form className="Form" onSubmit={performTransaction}>
          <div className="Form-Header">
            <h1> Buy {name} </h1>
            <button className="Form-Close" onClick={() => setShowForm(false)}>
              X
            </button>
          </div>
          <div className="Form-content">
            <p> Current Price: {currentPrice}</p>
            <div className="Input">
              <input
                type="number"
                min="0.000001"
                step="0.000001"
                value={amount}
                onChange={checkAmount}
              />
              <p onClick={() => setAmount(max)}> Max: {max} </p>
            </div>
            <p>You will be charged ${totalPayment}</p>
            <div className="Input-Radio">
              <div className="transaction">
                <input
                  type="radio"
                  value="buy"
                  name="transaction"
                  onClick={() => setTransactionType("buy")}
                  defaultChecked
                />{" "}
                Buy
              </div>
              <div className="">
                <input
                  type="radio"
                  value="sell"
                  name="transaction"
                  onClick={() => setTransactionType("sell")}
                />{" "}
                Sell
              </div>
            </div>
            <button
              disabled={disableButton}
              type="submit"
              className={disableButton ? "Form-Button" : "Form-Button enabled"}
            >
              {transactionType}
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default Form;
