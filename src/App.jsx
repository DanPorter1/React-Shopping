import './App.css'
import ShoppingPanel from "./components/ComShop/shopping/ShoppingPanel.jsx";
import Nav from "./components/Navigation/Nav.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import JsonData from "./components/ComShop/data/JsonData.jsx";
import About from "./components/About/About.jsx";

function App() {

  return (
    <>
        <h1>The Component Store</h1>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shopping" element={<ShoppingPanel url="https://product-list.danporter-36a.workers.dev/api/testdata" />} />
            <Route path="/about" element={<About/>} />
            <Route path="/jsondata" element={<JsonData url="https://product-list.danporter-36a.workers.dev/api/testdata"/>} />
        </Routes>
    </>
  )
}

export default App;
