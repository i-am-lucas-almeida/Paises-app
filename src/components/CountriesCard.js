import { Link } from "react-router-dom";
import 'animate.css';
import FormatNumeral from "./FormatNumeral";
import './sass/CountriesCard.scss';

const CountriesCard = ({ name, flag, population, region, capital, search }) => {

    function saveSearch(e) {

        e.preventDefault();

        if(search) {

            sessionStorage.setItem('searchCountry', search);

        } else {

            sessionStorage.setItem('searchCountry', '');
            
        }

    }

    return (

        <>

            <li className="card__container animate__animated animate__fadeIn" onClick={saveSearch}>

                <Link to={`/details/${name}`}>

                    <img src={flag} alt={name} />

                    <div className="card__info">

                        <h2>{name}</h2>

                        <ul>

                            <li>
                                <b>Population: </b>
                                <FormatNumeral text='' format='0,0'>
                                    {population}
                                </FormatNumeral>
                            </li>

                            <li>
                                <b>Region: </b>
                                <span>{region}</span>
                            </li>

                            <li>
                                <b>Capital: </b>
                                <span>{capital}</span>
                            </li>

                        </ul>

                    </div>

                </Link>

            </li>


        </>

    );

}

export default CountriesCard;