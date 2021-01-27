import React, { useState, useEffect } from "react";
import { commerce } from "./librairie/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from './component/carousel/Carousel';
import { CarouselData } from './component/carousel/CarouselData';
// import  { CarouselStyle} from './component/carousel/CarouselStyle';

import { Products, Navbar, Cart, Checkout, HomeArticle } from "./component";

import "./styles/App.css";
import "./styles/homeTitle.css";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [ errorMessage ,setErrorMessage] = useState("");

  const fetchProduct = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCard = async () => {
    const card = await commerce.cart.retrieve();
    setCart(card);
  };

  const handleCard = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCard = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveCard = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCard = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCard();
  }, []);
  console.log(">>>>>>>>>>>>", cart);

  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
          <Carousel slides={CarouselData} />
          <HomeArticle />
            <Products products={products} addToCard={handleCard} />
          </Route>

          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCard={handleUpdateCard}
              handleRemoveCard={handleRemoveCard}
              handleEmptyCard={handleEmptyCard}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} 
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
