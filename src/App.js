import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {

  return (

    <>

      <BrowserRouter>

        <NavBar/>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />

        </Routes>

      </BrowserRouter>

    </>

  );

}

export default App;
