import useFetch from "../../../../hooks/useFetch.js";
import ProductsList from "../productsList/ProductsList.jsx";

function ProductFetch(props) {
    const { data, isLoading, error } = useFetch(props.url);

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <ProductsList data={data} search={props.search} addItem={props.addItem} basket={props.basket} />}
        </>
    );
}

export default ProductFetch;