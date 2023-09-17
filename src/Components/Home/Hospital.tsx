import React from "react";
import a from "../../Assets/Rectangle 56.png";
import a1 from "../../Assets/Rectangle 57.png";
import a2 from "../../Assets/Rectangle 58.png";
import a3 from "../../Assets/Rectangle 59.png";
import a4 from "../../Assets/Rectangle 60.png";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
type Props = {};

const Hospital = (props: Props) => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <section className="mb-7 h-full">
        <div className="h-1/3">
          <img src={a} alt="background-map" className="h-1/3" />
        </div>
        <div className="container mr-0 ml-auto pr-0">
          <h1 className="font-semibold text-2xl py-5">Hospitals Nearby</h1>
          <div className="grid   grid-cols-2 lg:grid-cols-4">
            <div className="">
              <img src={a1} alt="hospital" />
              <h4 className="py-2">Eve Foundation Hospital</h4>
              <p className="py-2 font-medium">32, Aldmiralty</p>
              <Link to="" className="py-7 text-sm text-textColor">
                See more
              </Link>
            </div>
            <div className="">
              <img src={a2} alt="hospital" />
              <h4 className="py-2">Eve Foundation Hospital</h4>
              <p className="py-2 font-medium">32, Aldmiralty</p>
              <Link to="" className="py-7 text-sm text-textColor">
                See more
              </Link>
            </div>
            <div className="">
              <img src={a3} alt="hospital" />
              <h4 className="py-2">Eve Foundation Hospital</h4>
              <p className="py-2 font-medium">32, Aldmiralty</p>
              <Link to="" className="py-7 text-sm text-textColor">
                See more
              </Link>
            </div>
            <div className="">
              <img src={a4} alt="hospital" />
              <h4 className="py-2">Eve Foundation Hospital</h4>
              <p className="py-2 font-medium">32, Aldmiralty</p>
              <Link to="" className="py-7 text-sm text-textColor">
                See more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospital;
