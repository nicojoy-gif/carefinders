import React, { useState } from "react";
import Nav from "../Nav/Nav";
import bg from "../../Assets/Rectangle 1.png";
import About from "./About";
import Appointment from "../Appointment/Appointment";
import Testimonials from "./Testimonials";
import Footer from "../Footer/Footer";
import axios from "axios";

type Props = {};

type Hospital = {
  _id: string;
  name: string;
  address: string;
  city: string;
  phoneNumber: string;
  email: string;
};

const Home = (props: Props) => {
  const [city, setCity] = useState("");
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://carefinders.onrender.com/api/hospital/search?city=${city}`
      );
      console.log(response);
      setHospitals(response.data);
      console.log(hospitals);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="">
      <Nav />
      <section className="bg-customBlue h-full py-5">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div className="lg:w-4/6  mx-auto text-center lg:text-left">
              <h1 className="text-textColor text-center leading-snug  font-bold pt-5 lg:pt-0 text-4xl">
                Find the nearest hospital to you and make an appointment
              </h1>
              <p className="py-2 px-6 text-xl font-semibold text-center mb-5">
                Discover Your Perfect Care: Find Your Hospital, Anytime,
                Anywhere
              </p>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center mt-5 mx-auto ">
              <button className="text-white mt-5 font-semibold bg-textColor rounded-xl py-2 w-48 text-lg">
                GET STARTED
              </button>
              <div className="flex">
                <p className="py-3 italic font-semibold  text-lg">
                  Learn more{" "}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="60"
                  viewBox="0 0 50 50"
                >
                  <text x="5" y="30" font-size="24" fill="blue">
                    &#8594;
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center content-center my-5 lg:justify-end">
            <div className="rounded-lg">
              <img src={bg} alt="background" className="my-5" />
            </div>
          </div>
        </div>
        <div>
          <div className="pb-5 m-0 hospital">
            <p className="text-textColor font-medium pb-3 text-2xl leading-6 text-center ">
              Find a nearby hospital
            </p>
            <div className=" mx-auto rounded-full shadow-lg cursor-pointer  relative min-w-96 lg:w-1/3 w-full ">
              <form className="relative " onSubmit={(e) => handleSearch(e)}>
                <input
                  type="text"
                  className="w-full pl-3 pr-10 py-4 border-gray-200 placeholder-pr-10 text-center placeholder-gray-500 text-sm rounded-full hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter the City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <svg
                  className="w-4 h-4 absolute right-5 top-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(e) => handleSearch(e)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <svg
                  className="stroke-current absolute w-4 h-4 left-5 top-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(e) => handleSearch(e)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </form>
              <div className="search-results mt-5">
                {hospitals.map((hospital) => (
                  <div
                    key={hospital._id}
                    className="bg-white p-4 rounded-lg shadow-md mb-4"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {hospital.name}
                    </h3>
                    <p className="text-gray-600">{hospital.address}</p>
                    <p className="text-gray-600">{hospital.city}</p>
                    <p className="text-gray-600">{hospital.email}</p>
                    <p className="text-gray-600">{hospital.phoneNumber}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Appointment />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
