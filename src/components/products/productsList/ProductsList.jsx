function ProductsList(props) {

    const cleaned = props.data.map(p => ({
        ...p,
        cleanName: p.name.split(" ").slice(0, -1).join(" ")
    }));

    const filtered = cleaned.filter(p =>
        p.cleanName.toLowerCase().includes(props.search.toLowerCase())
    );

    const products = filtered.map(p => {
        return (
            <div key={p.id} className="productCard" id={p.in_stock ? "pYes" : "pNo"}>
                <div id="pName">{p.cleanName}</div>
                <div id="pDesc">{p.description}</div>
                {/*<div>Available: {p.in_stock ? "Yes" : "No"}</div>*/}
                <div id="pPrice">Price: £{p.price}</div>
                <button id="pBtn" onClick={() => props.addItem(p)}>Add to cart</button>
                <div id="pStock">{p.stock_quantity}</div>
            </div>
        )
    });
    return (products);
}

export default ProductsList;