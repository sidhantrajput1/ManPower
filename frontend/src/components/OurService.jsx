


function OurService() {
  return (
    <div className="bg-white px-4 py-14">
      <div className="max-w-7xl mx-auto space-y-10">
        <h3 className="text-center text-3xl font-bold">Our Services</h3>
        <div className="grid sm:grid-cols-3 gap-10">
          <div className="flex flex-col gap-5 p-4 bg-gray-50 border rounded-xl shadow-md hover:shadow-2xl hover:border-none">
            <h3 className="text-xl font-medium">Manpower Recruitment</h3>
            <p className="text-gray-600">
              We connect businesses with highly skilled professionals across
              various industries, ensuring the right fit for both employers and
              candidates.
            </p>
            <div className="">
              <p><span>&#10003;</span> Industry-specific recruitment solutions</p>
              <p><span>&#10003;</span> Verified candidate screening</p>
              <p><span>&#10003;</span> Permanent and contract staffing</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-4 bg-gray-50 border rounded-xl shadow-md hover:shadow-2xl hover:border-none">
            <h3 className="text-xl font-medium">Training Programs</h3>
            <p className="text-gray-600">
              Enhance your skills with our professional training programs
              designed to meet industry standards.
            </p>
            <div className="">
              <p> <span>&#10003;</span> Job-oriented skill development</p>
              <p><span>&#10003;</span> Certification programs</p>
              <p><span>&#10003;</span> Soft skills and leadership training</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-4 bg-gray-50 border rounded-xl shadow-md hover:shadow-2xl hover:border-none">
            <h3 className="text-xl font-medium">Job Placement</h3>
            <p className="text-gray-600">
              We assist job seekers in finding the perfect career opportunity,
              matching them with companies that align with their skills and
              ambitions.
            </p>
            <div className="">
                <p><span>&#10003;</span> Career counseling and resume building</p>
                <p><span>&#10003;</span> Personalized job recommendations</p>
                <p><span>&#10003;</span> Direct hiring opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
