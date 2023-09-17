import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import Navbar from "../Nav/Navbar";

const HospitalForm = () => {
  const [hospitalData, setHospitalData] = useState({
    name: "",
    address: "",
    city: "",
    email: "",
    phoneNumber: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://carefinders.onrender.com/api/hospital/hospital",
        hospitalData
      );
      console.log(response.data);
      if (response.status === 201) {
        setSuccessMessage("Hospital added successfully");
        setErrorMessage("");
        setHospitalData({
          name: "",
          address: "",
          city: "",
          email: "",
          phoneNumber: "",
        });
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("");
      setErrorMessage("An error occurred while adding the hospital");
    }
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setHospitalData({ ...hospitalData, [name]: value });
  };

  return (
    <div>
      <section className="fixed w-full top-0 mb-5">
        <Navbar />
      </section>
      <div className="max-w-md mx-auto my-20 top-20  p-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Add a Hospital</h2>
        {successMessage && (
          <div className="bg-green-200 text-green-800 p-2 rounded-md mb-4 text-center">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-200 text-red-800 p-2 rounded-md mb-4 text-center">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={hospitalData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-medium mb-2">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={hospitalData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block font-medium mb-2">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={hospitalData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={hospitalData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block font-medium mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={hospitalData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Add Hospital
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default HospitalForm;
