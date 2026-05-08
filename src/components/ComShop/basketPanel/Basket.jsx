import "./BasketPanel.css"

function Basket(props) {

    const allItems = props.basket;

    const totalPrice = allItems.reduce((acc, item) => {
        return acc + (item.price * (item.quantity || 1));
        }, 0);

    const items = allItems.map((item) => {
        return (
                <li className="itemSummary" key={item.id}>
                    <span>{item.quantity} x</span>
                    <span>{item.name.split(" ").slice(0, -1).join(" ")}</span>
                    <span>£{item.price}</span>
                    <button className="pBtn" onClick={() => props.qUpdate(item.id, 1)}>+</button>
                    <button className="pBtn" onClick={() => props.qUpdate(item.id, -1)}>-</button>
                </li>
        )
    });

    return (
        <div>
            <h5>Basket - {items.length} Items </h5>
            <ul className="basketList">
                {items}
            </ul>
            <hr/>
            <h3>Total: £{totalPrice.toFixed(2)}</h3>
            <hr/>
            <button className="pBtn clearC" id="clearCart" onClick={() => {props.cBasket()}}>Empty Cart</button>
        </div>
    )
}

export default Basket;