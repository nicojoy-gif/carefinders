import React from "react";
import a from "../../Assets/Line 1.png";
import a1 from "../../Assets/Ellipse 13.png";
import a2 from "../../Assets/Ellipse 13 (1).png";
import a3 from "../../Assets/Ellipse 13 (2).png";
import b from "../../Assets/Group 57.png";
type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="h-full my-5">
      <section className="lg:h-4/5 h-full flex flex-col my-auto content-center">
        <div className="text-center my-5 flex justify-center">
          <img src={a} alt="line" className="mx-2 " />
          <h1 className="text-gray-300 font-semibold text-center my-4 text-5xl">
            Testimonials
          </h1>
        </div>
        <p className="text-textColor mb-6 font-semibold  text-4xl text-center">
          What Our Users Say
        </p>
        <div className="container mx-auto grid grid-cols-1 my-5 gap-12 lg:grid-cols-3">
          <div className="bg-gray-200 rounded-lg mx-4 shadow-lg">
            <div className="my-6">
              <div className="w-4/5 text-sm mx-auto font-medium">
                <p className="py-3">
                  Finding the right hospital has never been easier! With this
                  website, I was able to locate a nearby hospital quickly and
                  efficiently. The search feature is user-friendly, and it
                  provided me with all essential information I needed. Highly
                  recommended
                </p>
                <img src={b} alt="star-reiew" />
                <div className="flex content-center items-center my-4">
                  <img src={a1} alt="sarah" />
                  <h3 className="font-medium mx-3">Sarah M.</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-lg mx-4 shadow-lg">
            <div className="my-6">
              <div className="w-4/5 text-sm mx-auto   font-medium">
                <p className="py-3">
                  I can't express how grateful i am for carefinder website. When
                  i needed urgent medical care while travelling, it helped me
                  locate the nearest hospital in a matter of seconds. The
                  accurate results and detailed directions saved me valuable
                  time and ensured i received the care i needed
                </p>
                <img src={b} alt="star-reiew" />
                <div className="flex content-center items-center my-4">
                  <img src={a3} alt="sarah" />
                  <h3 className="font-medium mx-3">John D.</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg mx-4 shadow-lg">
            <div className="my-6">
              <div className="w-4/5 text-sm mx-auto  font-medium">
                <p className="py-3">
                  I recently moved to a new city and had no idea where to go for
                  medical assistance, my friend shared some hospital details
                  using the carefinder website. It made my life easier, i was
                  able to fine reputable hospitals near me effortlessly. The
                  website's is user friendly interface and comprehensive search
                  gave me peace of mind. I highly recommend.{" "}
                </p>
                <img src={b} alt="star-reiew" />
                <div className="flex content-center items-center my-4">
                  <img src={a2} alt="sarah" />
                  <h3 className="font-medium mx-3">Emiliy T.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
