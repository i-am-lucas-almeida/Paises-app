import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {

        setLoader(true);

        axios.get(url)

            .then(function (resp) {

                setData(resp.data);
                setLoader(false);

            })
            .catch(function (error) {

                console.log(error)

            })

    }, [url]);

    return { data, loader };

}

export default useFetch;