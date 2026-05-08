import CartBanner from "../cartBanner/CartBanner.jsx";
import ProductsPanel from "../products/productsPanel/ProductsPanel.jsx";
import BasketPanel from "../basketPanel/BasketPanel.jsx";
import "./ShoppingPanel.css"
import {useState} from "react";


function ShoppingPanel (props) {

    const [basket, setBasket] = useState([]);

    function addToBasket(product) {
        setBasket(prev => {
            const existingItem = prev.find(item => item.id === product.id);

            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    }

    function quantityUpdate(id, amount) {
        setBasket(prev =>
            prev.map(item => {
                if (item.id === id) {
                    const newQty = (item.quantity || 1) + amount;
                    return { ...item, quantity: Math.max(1, newQty) };
                }
                return item;
            })
        );
    }

    function clearBasket() {
        setBasket([]);
    }

    return (
        <>
            <h2>The Shopping Simulator</h2>
            <CartBanner />
            <div className="shoppingPanel">
                <ProductsPanel url={props.url} addItem={addToBasket} basket={basket} />
                <BasketPanel basket={basket} cBasket={clearBasket} qUpdate={quantityUpdate}/>
            </div>
        </>
    )
}

export default ShoppingPanel;