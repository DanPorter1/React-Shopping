import useFetch from "../../../hooks/useFetch.js";
import ProductsList from "../../../components/products/productsList/ProductsList.jsx";

function ProductFetch() {
    const { data, isLoading, error } = useFetch("http://localhost:3000/data");

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <ProductsList data={data} />}
        </>
    );
}

export default ProductFetch;