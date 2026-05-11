import "./ProductsPanel.css"
import ProductFetch from "../productFetch/ProductFetch.jsx";
import {useCallback, useState} from "react";


function ProductsPanel(props) {

    const [search, setSearch] = useState("");

    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("all");

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
                <div>
                    <label htmlFor="">Filter Items </label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="all">All</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="productList">
                <ProductFetch url={props.url}
                              search={search}
                              addItem={props.addItem}
                              basket={props.basket}
                              getCat={getCategories}
                              selectedCategory={selectedCategory}
                />
            </div>
        </div>
    )
}

export default ProductsPanel;