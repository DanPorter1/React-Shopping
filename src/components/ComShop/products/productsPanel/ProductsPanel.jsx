import "./ProductsPanel.css"
import ProductFetch from "../productFetch/ProductFetch.jsx";
import {useCallback, useState} from "react";


function ProductsPanel(props) {

    const [search, setSearch] = useState("");

    const [cats, setCategories] = useState([]);   // store category list

    const getCategories = useCallback((cats) => {
        setCategories(cats);
    }, []);

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
                <select>
                    <option value="all">All</option>
                    {cats.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div className="productList">
                <ProductFetch url={props.url}
                              search={search}
                              addItem={props.addItem}
                              basket={props.basket}
                              getCat={getCategories}
                />
            </div>
        </div>
    )
}

export default ProductsPanel;