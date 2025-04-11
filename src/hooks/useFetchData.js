import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url) => {
        setError(false)
        setLoading(true);

        try {
            const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${url}`);
            if (!res.ok) {
                setError(true);
                return;
            }

            const data = await res.json();
            setData(data);
            setError(false);
        } catch (err) {
            console.error("Failed to fetch data: ", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return { loading, error, data };
};

export default useFetchData;