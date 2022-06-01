import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity } from "../actions/productQuantity";
import greyTshirt from "../images/greytshirt.jpg";
import greyHoddie from "../images/greyhoddie.jpg";
import blackTshirt from "../images/blacktshirt.jpg";
import blackHoddie from "../images/blackhoddie.jpg";
import { clearProduct } from "../actions/clearAction";

const Cart = ({ basketProps, productQuantity, clearProduct }) => {
  // console.log(basketProps);
  let productsInCart = [];
  Object.keys(basketProps.products).forEach((product) => {
    if (basketProps.products[product].inCart) {
      productsInCart.push(basketProps.products[product]);
    }
  });

  const productImages = (product) => {
    if (product.tagName === "greyTshirt") {
      return greyTshirt;
    } else if (product.tagName === "greyHoddie") {
      return greyHoddie;
    } else if (product.tagName === "blackTshirt") {
      return blackTshirt;
    } else if (product.tagName === "blackHoddie") {
      return blackHoddie;
    }
  };

  const products = productsInCart.map((product, i) => (
    <Fragment key={i}>
      <div className="product">
        <ion-icon
          onClick={() => clearProduct(product.tagName)}
          name="close-circle"
        ></ion-icon>
        <img alt={product.name} src={productImages(product)} />
        <span className="sm-hide">{product.name}</span>
      </div>
      <div className="price-container sm-hide">${product.price},00</div>
      <div className="quantity-container">
        <ion-icon
          onClick={() => productQuantity("decrease", product.tagName)}
          className="decrease"
          name="arrow-back-circle-outline"
        ></ion-icon>
        <span>{product.numbers}</span>
        <ion-icon
          onClick={() => productQuantity("increase", product.tagName)}
          className="increase"
          name="arrow-forward-circle-outline"
        ></ion-icon>
      </div>
      <div className="total-container">
        ${product.numbers * product.price},00
      </div>
    </Fragment>
  ));
  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{products}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Basket Total</h4>
        <h4 className="basketTotal">${basketProps.cartCost},00</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
  productQuantity,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
