// import AboutImg from "./../assets/img/heropageimg.png";

function About() {
  return (
    <div className="bg-white px-4">
      <div className="max-w-7xl mx-auto py-14 ">
        <div className="space-y-16">
          <div className="flex flex-col gap-4 items-center ">
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="sm:w-3xl  text-center text-gray-600">
              Skill Sqoud is a leading manpower, training, and placement company
              dedicated to empowering individuals and businesses. Our mission is
              to create employment opportunities and provide top-tier talent to
              industries across various sectors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="p-5 bg-gray-100 h-[170px] space-y-4 rounded-lg">
              <h3 className="text-xl font-medium">Our Vision</h3>
              <p className="">
                To be the most reliable workforce solutions provider, fostering
                professional growth and business success.
              </p>
            </div>
            <div className="p-5 bg-gray-100 h-[170px] space-y-4 rounded-lg">
              <h3 className="text-lg font-medium">Our Mission</h3>
              <div className="text-gray-600">
                <p>Equip job seekers with the right skills</p>
                <p>Provide companies with the best workforce solutions</p>
                <p>Bridge the employment gap through innovative strategies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
