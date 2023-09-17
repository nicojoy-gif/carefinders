import React from "react";
import a1 from "../../Assets/Rectangle 7.png";
import a2 from "../../Assets/Rectangle 8.png";
import a3 from "../../Assets/Group 32.png";
import a4 from "../../Assets/Group 33.png";
import a5 from "../../Assets/Group 34.png";
import a6 from "../../Assets/Group 35.png";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="my-5 h-full">
      <section className="grid  my-5 h-full lg:h-1/2 grid-cols-1 lg:grid-cols-3 mx-auto">
        <div className="h-1/2 hidden lg:block">
          <img src={a1} alt="hospital" />
        </div>
        <div className="h-1/2 hidden lg:block">
          <img src={a2} className="pt-10" alt="hospital-images" />
        </div>
        <div className="text-center lg:w-3/5 mx-auto">
          <h2 className="font-semibold py-5 leading-10 text-3xl">
            Welcome to{" "}
            <span className="text-textColor font-bold">CareFinder</span>
          </h2>
          <p className="font-semibold text-xl">
            Carefinder is a platform where users can search for hospitals in
            their areas, export hospital details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>

          <div className="mt-8">
            <button className="bg-textColor text-white font-medium text-lg rounded-xl w-48 p-2">
              OUR SERVICES
            </button>
          </div>
        </div>
      </section>
      <section className="grid  lg:h-screen  h-full products items-center gap-7 grid-cols-1 lg:grid-cols-4 m-auto">
        <div className="bg-customBlue mx-5 h-60 lg:mx-0 rounded-xl">
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center my-4">
              <img src={a6} alt="Doctor attending to patient" />
            </div>
            <h3 className="text-center font-bold">Search Doctors</h3>
            <p className="text-center mx-auto py-4 w-3/5 ">
              Effortlessly Find the Best Hospitals Near You
            </p>
          </div>
        </div>
        <div className="bg-customBlue h-60 lg:mx-0 mx-5 rounded-xl">
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center my-4">
              <img src={a5} alt="Doctor attending to patient" />
            </div>
            <h3 className="text-center font-bold">Search Hospitals</h3>
            <p className="text-center mx-auto py-4 w-4/5  ">
              Effortlessly Find the Best Doctors Near You
            </p>
          </div>
        </div>
        <div className="bg-customBlue h-60 lg:mx-0 mx-5 rounded-xl">
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center my-4">
              <img src={a4} alt="save list of hospitals" />
            </div>
            <h3 className="text-center font-bold">Export Hospitals</h3>
            <p className="text-center mx-auto py-4 w-3/5  ">
              Save list of hospitals.
            </p>
          </div>
        </div>
        <div className="bg-customBlue h-60 mx-5 lg:mx-0 rounded-xl">
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center my-4">
              <img src={a3} alt="share list of hospitals" />
            </div>
            <h3 className="text-center font-bold">Share Hospitals</h3>
            <p className="text-center mx-auto py-4 w-3/5  ">
              Share the list of hospitals with others.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
