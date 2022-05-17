import '../sass/SearchItens.scss';
import { BsSearch } from 'react-icons/bs';

const SearchInput = ({ value, setSearchName }) => {

    const handleChange = (e) => {

        setSearchName(e.target.value);

    }

    return (

        <form className="searchBar__c">

            <BsSearch />

            <input type="search" value={value} onChange={handleChange} placeholder="Search for a country..." />

        </form>

    );

}

export default SearchInput;