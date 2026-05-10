function ProductsList(props) {
    console.log("selectedCategory prop:", props.selectedCategory);
    
    // SearchBar
    const filtered = props.data.filter(p => {
        const searchMatches = p.name.toLowerCase().includes(props.search.toLowerCase());
        const catMatches = props.selectedCategory === "all" || p.categories.includes(props.selectedCategory);
        return searchMatches && catMatches;
    });

    const products = filtered.map(p => {

        const itemInBasket = props.basket.find(item => item.id === p.id);
        const basketQty = itemInBasket ? itemInBasket.quantity : 0;
        const remainingStock = p.stock_quantity - basketQty;

        return (
            <div key={p.id} className="productCard" id={remainingStock ? "pYes" : "pNo"}>
                <div id="pName">{p.name.split(" ").slice(0, -1).join(" ")}</div>
                <div id="pDesc">{p.description}</div>
                {/*<div>Available: {p.in_stock ? "Yes" : "No"}</div>*/}

                <div id="pPrice">Price: £{p.price}</div>
                <button className="pBtn" id={remainingStock ? "btnActive" : "btnInactive"} disabled={remainingStock <= 0} onClick={() => props.addItem(p)}>{remainingStock > 0 ? "Add to cart" : "Out of Stock"}</button>
                <div id="pStock">{remainingStock}</div>
            </div>
        )
    });
    return (products);
}

export default ProductsList;