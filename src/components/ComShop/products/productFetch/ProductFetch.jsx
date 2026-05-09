import useFetch from "../../../../hooks/useFetch.js";
import ProductsList from "../productsList/ProductsList.jsx";
import {useEffect} from "react";

function ProductFetch({ url, search, addItem, basket, getCat }) {
    const { data, isLoading, error } = useFetch(url);

    useEffect(() => {
        if (data) {
            const pCat = [...new Set(data.flatMap(p => p.categories))];
            getCat(pCat);
        }
    }, [data, getCat]);

    return (
        <>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <ProductsList
                data={data}
                search={search}
                addItem={addItem}
                basket={basket}
            />}
        </>
    );
}

export default ProductFetch;