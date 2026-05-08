import CartBanner from "../cartBanner/CartBanner.jsx";
import ProductsPanel from "../products/productsPanel/ProductsPanel.jsx";
import BasketPanel from "../basketPanel/BasketPanel.jsx";
import "./ShoppingPanel.css"
import {useState} from "react";


function ShoppingPanel (props) {

    const [basket, setBasket] = useState([]);

    function addToBasket(item) {
        setBasket(prev => [...prev, item]);
    }

    function clearBasket() {
        setBasket([]);
    }

    return (
        <>
            <CartBanner />
            <div className="shoppingPanel">
                <ProductsPanel url={props.url} addItem={addToBasket}/>
                <BasketPanel basket={basket} cBasket={clearBasket}/>
            </div>
        </>
    )
}

export default ShoppingPanel;