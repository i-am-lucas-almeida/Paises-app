import { useState, useEffect } from 'react';

import { getAll } from '../lib/utils';
import useFetch from '../hook/useFetch';
import SearchInput from "../components/Search/SearchInput";
import SearchOptions from "../components/Search/SearchOptions";
import CountriesCard from '../components/CountriesCard';
import Loader from '../components/Loader';

import LoadMore from '../components/LoadMore';

const Home = () => {

    const url = getAll();

    const { data, loader } = useFetch(url);

    const [searchName, setSearchName] = useState('');
    const [searchOptions, setSearchOptions] = useState('');

    const { loadMore } = LoadMore();

    const lowerName = searchName.toLowerCase();

    function filterCountries(items) {

        return items.filter(

            (item) =>
                item.name.toLowerCase().includes(lowerName) &&
                item.region.includes(searchOptions)

        )

    }

    useEffect(() => {

        const dataSearch = sessionStorage.getItem('searchCountry');
        
        setSearchName(dataSearch ? dataSearch : '');

    }, []);

    return (

        <div className="container">

            {loader ? <Loader /> :

                <>

                    <div className="home__searchBar">

                        <SearchInput
                            value={searchName}
                            setSearchName={setSearchName}
                        />

                        <SearchOptions
                            value={searchOptions}
                            setSearchOptions={setSearchOptions}
                        />

                    </div>

                    <ul className='home__countries-container'>

                        {
                            filterCountries(data).length > 0 ? filterCountries(data).map((item, index) =>

                                index < loadMore &&

                                <CountriesCard key={item.name} {...item} search={searchName}/>

                            ) :

                                <li className='not-find'>
                                    <h2>Sorry! We didn't find anything...</h2>
                                </li>
                        }

                    </ul>

                </>

            }

            <div id='load-more'></div>

        </div>

    );

}

export default Home;