import React from "react";
import a from "../../Assets/Ellipse 19.png";
import a1 from '../../Assets/logos_facebook.png'
import a2 from '../../Assets/skill-icons_instagram.png'
import { Link } from "react-router-dom";
type Props = {};

const Account = (props: Props) => {
  return (
    <div>
      <section>
        <div className="grid gap-5 grid-cols-3 lg:grid-cols-6 ">
          <div className="col-span-2 ">
            <h1 className="text-textColor  font-bold text-3xl py-5">
              CareFinder
            </h1>
            <div className="my-10 border-r-2 w-72 border-gray-200">
              <ul>
                <li className="py-1 my-1 hover:bg-gray-100 rounded-xl">
                  <Link
                    to=""
                    className="font-medium text-lg px-5  py-1 my-5  rounded-xl"
                  >
                    Profile
                  </Link>
                </li>
                <li className="py-1 my-1 hover:bg-gray-100 rounded-xl">
                  <Link
                    to=""
                    className="font-medium text-lg px-5  py-1 my-5  rounded-xl"
                  >
                    Find Hospital
                  </Link>
                </li>
                <li className="py-1 my-1 hover:bg-gray-100 rounded-xl">
                  <Link
                    to=""
                    className="font-medium text-lg px-5  py-1 my-5  rounded-xl"
                  >
                  Book An Appointment
                  </Link>
                </li>
                <li className="py-1 my-1 hover:bg-gray-100 rounded-xl">
                  <Link
                    to=""
                    className="font-medium text-lg px-5  py-1 my-5  rounded-xl"
                  >
                  Home
                  </Link>
                </li>
                <li className="py-1 my-1 hover:bg-gray-100 rounded-xl">
                  <Link
                    to=""
                    className="font-medium text-lg px-5  py-1 my-5  rounded-xl"
                  >
                    Search
                  </Link>
                </li>
                <li className="py-1 my-1 hover:bg-gray-100 rounded-xl">
                  <Link
                    to=""
                    className="font-medium text-lg px-5  py-1 my-5 "
                  >
                    Library
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-3 justify-center w-full">
            <div className=" w-2/3 my-10 mx-auto">
              <input
                type="text"
                id="Search"
                placeholder="Search hospital"
                className="w-full px-7 text-gray-200 font-medium rounded-xl border-gray-300 border py-2.5  sm:text-sm"
              />
            </div>
            <div>
              <h2 className="text-2xl text-textColor text-center  font-semibold">PROFILE DETAILS</h2>
              <div className=" w-2/3 my-3 mx-auto">
                <label className="font-medium ">Name</label>
              <input
                type="text"
                id="Search"
                placeholder="Enter Name"
                className="w-full px-7 text-gray-200 my-2 font-medium rounded-xl border-gray-400 border py-2.5  sm:text-sm"
              />
            </div>
            </div>
            <div>
              
              <div className=" w-2/3 my-3 mx-auto">
                <label className="font-medium ">Email Address</label>
              <input
                type="email"
                id="Search"
                placeholder="Enter Email Address"
                className="w-full px-7 text-gray-200 my-2 font-medium rounded-xl border-gray-400 border py-2.5  sm:text-sm"
              />
            </div>
            </div>
            <div>
              
              <div className=" w-2/3 my-3 mx-auto">
                <label className="font-medium ">Address</label>
              <input
                type="text"
                id="Search"
                placeholder="Enter Address"
                className="w-full px-7 text-gray-200 my-2 font-medium rounded-xl border-gray-400 border py-2.5  sm:text-sm"
              />
            </div>
            </div>
            <div className="flex justify-center">
              <button className="bg-textColor text-white font-medium py-1 px-4 text-lg rounded-lg">Save</button>
            
            </div>
            <div className="my-5">
            <p className="font-medium my-5 text-center">
                Connect to Social Media Accounts
              </p>
              <div className="flex justify-center">
                <img src={a1} alt="facebook-logo" className="mx-2 w-8 h-8"/>
                <img src={a2} alt="instagram-logo" className="mx-2 w-8 h-8"/>
              </div>
            </div>
          </div>
          <div className="col-span-1  flex justify-center ">
            <div className="rounded-full h-1/2 w-1/2 my-5">
              <img src={a} alt="profile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
