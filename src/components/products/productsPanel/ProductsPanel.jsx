import "./ProductsPanel.css"
import ProductFetch from "../productFetch/ProductFetch.jsx";


function productsPanel() {

    return (
        <div className="productsPanel">
            <h3>Products</h3>
            <small>Will be a list of products</small>
            <ProductFetch />
        </div>
    )
}

export default productsPanel;