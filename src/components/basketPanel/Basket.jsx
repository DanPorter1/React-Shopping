import {useState} from "react";

function Basket(props) {

    const allItems = props.basket;

    const totalPrice = allItems.reduce((acc, item) => acc + item.price, 0);

    const items = allItems.map((item) => {
        return (
                <li key={item.id}>
                    <p>{item.name} - £{item.price}</p>
                </li>
        )
    });

    return (
        <div>
            <h5>Basket - {items.length} Items </h5>
            <ul>
                {items}
            </ul>
            <hr/>
            <h3>Total: £{totalPrice.toFixed(2)}</h3>
            <hr/>
            <button id="clearCart" onClick={() => {props.cBasket()}}>Empty Cart</button>
        </div>
    )
}

export default Basket;