import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header/Header.jsx";
import { MainPage } from "./components/pages/Main/MainPage.jsx";
import { CartPage } from "./components/pages/Cart/CartPage.jsx";
import { getProducts } from "./redux/store/store.actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <BrowserRouter basename="/lampa-test/">
      <Header />
      <Route exact path="/" component={MainPage} />
      <Route path="/cart/" component={CartPage} />
    </BrowserRouter>
  );
}

export default App;
