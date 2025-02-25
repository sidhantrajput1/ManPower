import { Link } from "react-router-dom";
import NavBar from "./Shared/NavBar";

function About() {
  return (
    <div className="">
      <NavBar />
      <div className="bg-gray-100 ">
        <div className="max-w-7xl mx-auto py-14 px-6">
          <h3 className="text-center text-3xl tracking-widest">About Us</h3>
          <div className="py-10 md:w-5xl  mx-auto flex items-center flex-col gap-8">
            <p className="text-center lg:w-2xl md:w-xl sm:w-xl text-base/8 tracking-widest ">
              Skill Sqoud is a leading manpower, training, and placement company
              dedicated to empowering individuals and businesses. Our mission is
              to create employment opportunities and provide top-tier talent to
              industries across various sectors.
            </p>
            <button className="text-center tracking-wider p-4 border rounded-4xl hover:bg-black hover:text-white px-6">
              <Link to="/contact">Say Hello</Link>
            </button>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="p-5 bg-white  space-y-4 rounded-lg">
                <h3 className="text-xl font-medium">Our Vision</h3>
                <p className="">
                  To be the most reliable workforce solutions provider,
                  fostering professional growth and business success.
                </p>
              </div>
              <div className="p-6 bg-white space-y-4 rounded-lg">
                <h3 className="text-lg font-medium">Our Mission</h3>
                <div className="text-gray-600">
                  <p><span>&#10003;</span> Equip job seekers with the right skills</p>
                  <p><span>&#10003;</span> Provide companies with the best workforce solutions</p>
                  <p><span>&#10003;</span> Bridge the employment gap through innovative strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutContact />
    </div>
  );
}

function AboutContact() {
  return (
    <div className="bg-gray-700 py-10">
      <p className="text-center text-gray-300">
        Copyright © 2025 Skills Squid - All Rights Reserved.
      </p>
    </div>
  );
}

export default About;
