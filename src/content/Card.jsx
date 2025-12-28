
// import React from 'react'

// const user={
//   firstname: 'nikhil',
//   lastname:'123456789'
// }

// function Formate(user){
//   return user.firstname+''+user.lastname
// }

// const imgurl="https://static.vecteezy.com/system/resources/previews/030/904/096/large_2x/agricultural-tractor-with-attachments-drives-through-farm-field-and-agricultural-background-free-photo.jpg"


// function Card(props){
  
// return (
// <div className='flex  '>
//   <p>{ Formate(user)}</p>
// <div className='flex'>
//   <img className='size-30 ' src={imgurl} alt="" /></div>


//   <div className='size-40 bg-gradient-to-tl to-blue-100 from-blue-950'>
//     <span className=' mx-auto'> Name :{props.text}</span>
//   </div>

  
//   </div>
// )



// }
// export default Card



  

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const SimpleBookMachine = () => {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Card();
  }, []);

  const Card = () => {
    try {
      const storedMachines = localStorage.getItem('machines');
      if (storedMachines) {
        const machinesData = JSON.parse(storedMachines);
        setMachines(machinesData);
      }
    } catch (error) {
      console.error('Error loading machines:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookMachine = (machineId, machineName) => {
    alert(`Booking request sent for ${machineName}!`);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mt-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading machines...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Available Machines for Rent</h2>
        
        {machines.length === 0 ? (
          <div className="text-center mt-5">
            <div className="card">
              <div className="card-body p-5">
                <h4 className="text-muted">No machines available</h4>
                <p className="text-muted">Be the first to list your machine!</p>
                <a href="/ListMachine" className="btn btn-primary">
                  List Your Machine
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            {machines.map((machine) => (
              <div key={machine.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={machine.imageUrl}
                    className="card-img-top"
                    alt={machine.machineName}
                    style={{ height: '250px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x250?text=No+Image';
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary">{machine.machineName}</h5>
                    <div className="card-text flex-grow-1">
                      <p><strong>📍 Location:</strong> {machine.location}</p>
                      <p><strong>⏰ Availability:</strong> {machine.availability}</p>
                      <p><strong>💰 Price:</strong> ₹{machine.rentPrice}/day</p>
                      {machine.description && (
                        <p><strong>📝 Description:</strong> {machine.description}</p>
                      )}
                      <p><strong>📅 Listed:</strong> {new Date(machine.createdAt).toLocaleDateString()}</p>
                    </div>
                    <button
                      className="btn btn-success w-100 mt-auto"
                      onClick={() => handleBookMachine(machine.id, machine.machineName)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-4">
          <button className="btn btn-outline-primary" onClick={Card}>
            Refresh List
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Card;