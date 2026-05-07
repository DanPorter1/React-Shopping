import './App.css'
import CartBanner from "./components/cartBanner/CartBanner.jsx";
import ProductsPanel from "./components/products/productsPanel/ProductsPanel.jsx";
import BasketPanel from "./components/basketPanel/BasketPanel.jsx";

function App() {

  return (
    <>
      <h1>The Shopping Simulator</h1>
      <CartBanner />
      <div className="cartMain">
      <ProductsPanel />
      <BasketPanel />
      </div>
    </>
  )
}

export default App;
