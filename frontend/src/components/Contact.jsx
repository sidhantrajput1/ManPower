// import NavBar from "./Shared/NavBar"

import NavBar from "./Shared/NavBar";

function Contact() {
  return (
    <div className="">
        <NavBar />
      <div className="bg-gray-100 ">
        <div className="max-w-5xl mx-auto py-14">
          <h3 className="text-3xl font-normal tracking-widest text-center">
            Contact Us
          </h3>
          <div className="py-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-8">
              <input
                required
                className="border-b-2  border-blue-200 outline-none  p-4 "
                type="text"
                placeholder="Name"
              />
              <input
                required
                className="border-b-2  border-blue-200 outline-none p-4 "
                type="email"
                placeholder="Email"
              />
              <input
                required
                className="border-b-2  border-blue-200 outline-none p-4 "
                type="text"
                placeholder="Message"
              />
              <div className="space-y-6">
                <button className="p-4 border-black w-full rounded-4xl border-2 hover:bg-black hover:text-white transition duration-500">
                  Send
                </button>
                <p className="text-gray-400 text-sm text-center">
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms of Service apply.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl  font-light tracking-widest font-sans">
                Skills Squid
              </h3>
              <p className="text-gray-600 ">
                Maharana Chok, 201832, Mayur vihar, Delhi
              </p>
              <div className="flex flex-col text-gray-500 font-sans gap-1">
                <a className="text-sm tracking-wide hover:text-blue-300" href="">www.skillssquid.com</a>
                <a className="text-sm tracking-wide hover:text-blue-300" href="">info@skillssquid.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterContact />
    </div>
  );
}


function FooterContact() {
    return (
        <div className="bg-gray-700 py-10">
            <p className="text-center text-gray-300">Copyright © 2025 Skills Squid - All Rights Reserved.</p>
        </div>
    )
}

export default Contact;
