import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchVideoFromUrl = async () => {
            try {
                const response = await axios.get(url);
                setData(response?.data.results.items);
                setIsLoading(false);
                setError(null);
                console.log(response.data);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        };

        const time = setTimeout(() => {
            fetchVideoFromUrl();
        }, 5000);

        return (() => {
            clearTimeout(time);
        });
    }, [url]);

    return { data, isLoading, error, tags };
}

export default useFetch;