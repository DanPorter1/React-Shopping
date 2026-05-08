import "./ProductsPanel.css"
import ProductFetch from "../productFetch/ProductFetch.jsx";
import {useState} from "react";


function ProductsPanel(props) {

    const [search, setSearch] = useState("");

    return (
        <div className="productsPanel">
            <h3>Products</h3>
            <div className="pControls">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="productList">
                <ProductFetch url={props.url} search={search} addItem={props.addItem} basket={props.basket} />
            </div>
        </div>
    )
}

export default ProductsPanel;