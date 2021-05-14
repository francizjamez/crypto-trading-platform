import "./Form.css";
import { useState, useContext } from "react";
//contexts
import CoinContext from "../_contexts/CoinContext";


const Form = () => {
  const [amount, setAmount] = useState(0);

  const { currentCoin , showForm, setShowForm } = useContext(CoinContext);
  const { id } = currentCoin;
  
  console.log( 'form:', showForm )
  return (
    showForm &&
    <div className="Form ">
      <div className="Form-Header">
        <h1> Buy {currentCoin.coinName} </h1>
        <div className="Form-Close" onClick={() => setShowForm(false)}> X </div>
      </div>
      <div className="Form-content">
        <p> Current Price: {currentCoin.currentPrice}</p>
        <div className="Input">
          <input type="text" value={amount} />
          <p> Max: {currentCoin.wallet} </p>
        </div>
        <div className="Input-Radio">
          <div className="buy">
            <input type="radio" value="buy" name="transaction" /> Buy
          </div>
          <div className="sell">
            <input type="radio" value="sell" name="transaction" /> Sell
          </div>
        </div>
        <div className="Form-Button">Buy</div>
      </div>
    </div>
  );
};

export default Form;
