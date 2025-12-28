// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {

//     const navigate=useNavigate();
//     function handleclick() {
//      navigate('/About');
//   }

//   return (
//     <div>
//        <button onClick={handleclick}> move to About page </button>
//     </div>
//   )
// }

// export default Home
import React from 'react';
import Navbar from './ Navbar';
import Footer from './Footer';

const SimpleHome = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="display-4 text-primary">AgriRental Platform</h1>
          <p className="lead">Rent agricultural machinery easily</p>
          <div className="mt-4">
            <a href="/ListMachine" className="btn btn-success btn-lg me-3">
              List Your Machine
            </a>
            <a href="/BookMachine" className="btn btn-primary btn-lg">
              Book Machine
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SimpleHome;