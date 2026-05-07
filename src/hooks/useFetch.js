import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url)
            .then(res => {

                if (!res.ok) {
                    throw Error("Failed to fetch data.");
                }

                return res.json();

            })
            .then(data => {
                setData(data);
                setError(null);
                setIsLoading(false);

            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });

    }, [url]);

    return { data, isLoading, error, setData };
}

export default useFetch;
