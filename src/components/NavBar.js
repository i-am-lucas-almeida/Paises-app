import './sass/NavBar.scss';
import { Link } from "react-router-dom";

const NavBar = () => {

    return (

        <nav className="container navbar">

            <div>

                <Link to='/'>
                    Where in the world?
                </Link>

            </div>

        </nav>

    );

}
 
export default NavBar;