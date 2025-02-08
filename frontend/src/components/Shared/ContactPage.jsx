function Contact() {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Left Section - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
            <p className="text-gray-600">
              Whether you need skilled engineers, laborers, or manpower for your construction or industrial project, we are here to help. Fill out the form or contact us using the details below.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg text-gray-800">Head Office</h4>
                <p className="text-gray-600">123 Construction Blvd, Suite 400<br />City, Country 456789</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">Phone</h4>
                <p className="text-gray-600">+91-1234567890</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">Email</h4>
                <p className="text-gray-600">contact@skillsquad.com</p>
              </div>
            </div>
          </div>
  
          {/* Right Section - Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                <input type="text" name="name" id="name" required className="w-full mt-1 p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required className="w-full mt-1 p-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Your Message</label>
                <textarea name="message" id="message" rows="4" className="w-full mt-1 p-2 border border-gray-300 rounded-lg" required></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  