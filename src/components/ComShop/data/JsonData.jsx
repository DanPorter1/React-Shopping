import useFetch from "../../../hooks/useFetch.js";
import "./JsonData.css"

function JsonData({ url }) {
    const { data, isLoading, error } = useFetch(url);

    return (
        <div>
            {isLoading && <div>Loading…</div>}
            {error && <div>Error: {error}</div>}
            {data && (
                <pre className="json-pretty">
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
}

export default JsonData;