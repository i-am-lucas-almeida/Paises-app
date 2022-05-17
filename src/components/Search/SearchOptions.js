import '../sass/SearchItens.scss';

const SearchOptions = ({ value, setSearchOptions }) => {

    function handleChange(e) {

        e.preventDefault();
        setSearchOptions(e.target.value);

    }

    return (

        <>

            <select onChange={handleChange} value={value} className='searchOptions'>

                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>

        </>

    );

}

export default SearchOptions;