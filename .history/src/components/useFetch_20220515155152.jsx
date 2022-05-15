import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const response = await axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?&numResults=${results}&q=${search}`);
            setFetchVideo(response?.data.results);
            setIsLoading(false);
            setError(null);
            console.log(response.data);
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;