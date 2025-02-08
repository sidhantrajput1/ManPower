import Contact from "./ContactPage";

/* eslint-disable react/prop-types */
function ContactModel({ cancelBtn }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-0 flex items-center justify-center z-50 ">
      <div className="bg-white h-[80vh] p-6 rounded-lg shadow-lg ">
        {/* Close Button */}
        <button
          onClick={() => cancelBtn(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          X
        </button>

        {/* Modal Content */}
        <div className="">
          <Contact className="" />
          <div className="footer flex justify-center space-x-4">
            <button
              onClick={() => cancelBtn(false)}
              className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModel;


