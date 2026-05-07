function ProductsList(props) {

    // Will show all - Filter possible?
    const products = props.data.map(p => {
        return (
            <div key={p.id} className="productCard">
                <div>Name: {p.name}</div>
                <div>Description: {p.description}</div>
                <div>Price: {p.price}</div>
                <div>Available: {p.in_stock}</div>
                <div>Stock: {p.stock_quantity}</div>
            </div>
        )
    });
    return (products);
}

export default ProductsList;