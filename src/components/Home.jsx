import React, { useState } from "react";
import GrayTShirt from "../images/greytshirt.jpg";
import BlackHoddie from "../images/blackhoddie.jpg";
import BlacktShirt from "../images/blacktshirt.jpg";
import GreyHoddie from "../images/greyhoddie.jpg";
import { connect } from "react-redux";
import { addToBasket } from "../actions/addAction";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [basketNumber, setBasketNumber] = useState(0);

  const addToCart = () => {
    setBasketNumber(basketNumber + 1);
  };

  return (
    <div className="container">
      <div className="card">
        <img src={GrayTShirt} alt="Grey T-Shirt" />
        <h3>Grey T-Shirt</h3>
        <h4>$15.00</h4>
        <Link
          onClick={() => props.addToBasket("greyTshirt")}
          className="addToCart cart1"
          to=""
        >
          Add to Cart
        </Link>
      </div>
      <div className="card">
        <img src={BlackHoddie} alt="Black Hoddie" />
        <h3>Black Hoddie</h3>
        <h4>$22.00</h4>
        <Link
          className="addToCart cart2"
          to=""
          onClick={() => props.addToBasket("blackHoddie")}
        >
          Add to Cart
        </Link>
      </div>
      <div className="card">
        <img src={BlacktShirt} alt="Black TShirt" />
        <h3>Black T-Shirt</h3>
        <h4>$15.00</h4>
        <Link
          className="addToCart cart3"
          to=""
          onClick={() => props.addToBasket("blackTshirt")}
        >
          Add to Cart
        </Link>
      </div>
      <div className="card">
        <img src={GreyHoddie} alt="Grey Hoddie" />
        <h3>Grey Hoddie</h3>
        <h4 className="price">$22.00</h4>
        <Link
          className="addToCart cart4"
          to=""
          onClick={() => props.addToBasket("greyHoddie")}
        >
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default connect(null, { addToBasket, getNumbers })(Home);
