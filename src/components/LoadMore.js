import { useState, useEffect } from 'react';

const LoadMore = () => {

    const [loadMore, setLoadMore] = useState(0);

    useEffect(() => {

        const intersectObserver = new IntersectionObserver((entries) => {

            if (entries.some((entry) => entry.isIntersecting)) {

                setLoadMore((loadMoreInsideState) => loadMoreInsideState + 20);

            }

        })

        intersectObserver.observe(document.querySelector("#load-more"));

        return () => intersectObserver.disconnect();

    }, [])

    return { loadMore }

}

export default LoadMore;