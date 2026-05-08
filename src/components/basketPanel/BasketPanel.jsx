import "./BasketPanel.css"
import Basket from "./Basket.jsx";

function basketPanel (props) {
    return (
        <div className="basketPanel">
            <h3>Cart Items</h3>
            <Basket basket={props.basket} cBasket={props.cBasket} />
        </div>
    )
}

export default basketPanel;