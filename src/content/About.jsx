// import React from 'react'

// const About = () => {
//   return (
//     <div>
//        <h1>aboutr sdjbkl</h1> 
//     </div>
//   )
// }

// export default About

import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const SimpleListMachine = () => {
  const [formData, setFormData] = useState({
    machineName: '',
    location: '',
    availability: '',
    rentPrice: '',
    description: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', variant: 'success' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.machineName || !formData.location || !formData.availability || !formData.rentPrice) {
      setAlert({
        show: true,
        message: 'Please fill in all required fields',
        variant: 'danger'
      });
      return;
    }

    if (!imageFile) {
      setAlert({
        show: true,
        message: 'Please upload an image',
        variant: 'danger'
      });
      return;
    }

    // Create machine object
    const machineData = {
      id: Date.now().toString(),
      ...formData,
      rentPrice: parseFloat(formData.rentPrice),
      imageUrl: imagePreview,
      createdAt: new Date().toISOString(),
      status: 'available'
    };

    // Get existing machines from localStorage
    const existingMachines = JSON.parse(localStorage.getItem('machines') || '[]');
    
    // Add new machine
    existingMachines.push(machineData);
    
    // Save to localStorage
    localStorage.setItem('machines', JSON.stringify(existingMachines));

    // Show success message
    setAlert({
      show: true,
      message: 'Machine listed successfully!',
      variant: 'success'
    });

    // Reset form
    setFormData({
      machineName: '',
      location: '',
      availability: '',
      rentPrice: '',
      description: ''
    });
    setImageFile(null);
    setImagePreview('');

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlert({ show: false, message: '', variant: 'success' });
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-4">List Your Machine</h2>
            
            {alert.show && (
              <div className={`alert alert-${alert.variant} alert-dismissible fade show`}>
                {alert.message}
                <button type="button" className="btn-close" onClick={() => setAlert({ show: false, message: '', variant: 'success' })}></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Left Column - Form Fields */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="machineName" className="form-label">Machine Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="machineName"
                      name="machineName"
                      value={formData.machineName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="availability" className="form-label">Availability *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      placeholder="e.g., 24/7, Weekdays only"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="rentPrice" className="form-label">Rent Price (₹) *</label>
                    <input
                      type="number"
                      className="form-control"
                      id="rentPrice"
                      name="rentPrice"
                      value={formData.rentPrice}
                      onChange={handleInputChange}
                      min="0"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      value={formData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>

                {/* Right Column - Image Upload */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">Machine Image *</label>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />
                  </div>

                  {imagePreview && (
                    <div className="mb-3">
                      <label className="form-label">Image Preview</label>
                      <div className="border rounded p-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="img-fluid"
                          style={{ maxHeight: '300px', width: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-lg">
                      List Machine
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SimpleListMachine;