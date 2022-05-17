import { useNavigate, useParams } from "react-router-dom";
import { getName } from '../lib/utils';
import useFetch from '../hook/useFetch';

import { BiArrowBack } from 'react-icons/bi';
import Loader from '../components/Loader';
import DetailsContainer from "../components/DetailsContainer";

const Details = () => {

    const { name } = useParams();

    const url = getName(name);

    const { data, loader } = useFetch(url);

    const items = data[0];

    const navigate = useNavigate();

    return (

        <>

            {loader ? <Loader /> :

                <div className="container details__c">

                    <button onClick={() => navigate(-1)} className='button__back'>
                        <BiArrowBack />
                        <span>Back</span>
                    </button>

                    {items && <DetailsContainer {...items} />}

                </div>

            }

        </>

    );

}

export default Details;