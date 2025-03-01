import NavBar from "./Shared/NavBar";

function Service() {
  return (
    <div className="">
      <NavBar />
      <div className="bg-gray-100 ">
        <div className="max-w-7xl mx-auto py-14">
          <div className="flex flex-col items-center">
            <h3 className=" tracking-widest font-medium bg-clip-text  bg-gradient-to-r from-primary to-primary/70 text-3xl">
              Our Service
            </h3>
            <p className="pt-8 lg:w-xl text-center tracking-widest">
              We provide comprehensive solutions to connect talented
              professionals with leading businesses, while offering training and
              placement services to enhance career growth.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Manpower Recruitment
            </h3>
            <p className="text-gray-600 mb-6">
              We connect businesses with highly skilled professionals across
              various industries, ensuring the right fit for both employers and
              candidates.
            </p>
            <ul className="space-y-3">
              {[
                "Industry-specific recruitment solutions",
                "Verified candidate screening",
                "Permanent and contract staffing",
              ].map((data, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span >&#10003;</span>
                  <span className="text-gray-700">{data}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <FooterService />
    </div>
  );
}



function FooterService() {
  return (
    <div className="bg-gray-700 py-14">
      <p className="text-center text-gray-300">
        Copyright © 2025 Skills Squid - All Rights Reserved.
      </p>
    </div>
  );
}

export default Service;
