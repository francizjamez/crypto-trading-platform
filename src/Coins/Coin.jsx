//modules
import { useEffect } from "react";
//css
import "./coin.css";
//context

const Coin = (props) => {
  const { data } = props;

  const { id, market_data, image } = data;

  useEffect(() => {}, [id]);
  return (
    <div className="coin">
      {/* <img src={image} alt="" />
      <div className="information">
        <h1>${price}</h1>
        <h2>{id}</h2>
        <p>Last 24h: {change}%</p>
      </div> */}
      <img src={image.small} alt="" />
      <div className="information">
        <h1>${market_data.current_price.usd}</h1>
        <h2>{id}</h2>
        <p></p>
      </div>
    </div>
  );
};

export default Coin;
