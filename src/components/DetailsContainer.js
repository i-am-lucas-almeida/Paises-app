import { Link } from 'react-router-dom';
import './sass/DetailsContainer.scss';
import FormatNumeral from './FormatNumeral';
import { names } from '../lib/CountriesNames';

const DetailsContainer = (props) => {

    const flagImage = props.flags;

    return (

        <>

            <div className="detailsContainer__c">

                <div className="detailsContainer__image">

                    <img src={flagImage.svg} alt={props.name} />

                </div>

                <div className="detailsContainer__info">

                    <h1>{props.name}</h1>

                    <div className="detailsContainer__info--flex">

                        <ul>

                            <li>
                                <b>Native Name: </b>
                                <span>{props.nativeName}</span>
                            </li>

                            <li>
                                <b>Population: </b>
                                <FormatNumeral text='' format='0,0'>
                                    {props.population}
                                </FormatNumeral>
                            </li>

                            <li>
                                <b>Region: </b>
                                <span>{props.region}</span>
                            </li>

                            <li>
                                <b>Sub Region: </b>
                                <span>{props.subregion}</span>
                            </li>

                            <li>
                                <b>Area: </b>
                                <FormatNumeral text='Km²' format='0,0'>
                                    {props.area}
                                </FormatNumeral>
                            </li>

                        </ul>

                        <ul>

                            <li>
                                <b>Capital: </b>
                                <span>{props.capital}</span>
                            </li>

                            <li>
                                <b>Top Level Domain: </b>
                                <span>{props.topLevelDomain}</span>
                            </li>

                            <li>
                                <b>Currencies: </b>
                                {props.currencies && props.currencies.map((index) =>

                                    <span key={index} className='details-items'>
                                        {index.name}
                                    </span>

                                )}
                            </li>

                            <li>
                                <b>Languages: </b>

                                {props.languages && props.languages.map((index) =>

                                    <span key={index} className='details-items'>
                                        {index.name}
                                    </span>

                                )}
                            </li>

                        </ul>

                    </div>

                    <ul className='details__border'>

                        <b>Borders Countries: </b>

                        <li>
                            {props.borders && props.borders.map((index) =>

                                <Link to={`/details/${names[index]}`} key={index} className='details-items details__border--item'>
                                    {names[index]}
                                </Link>

                            )}
                        </li>

                    </ul>

                </div>

            </div>

        </>

    );

}

export default DetailsContainer;