import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-10 bg-black/90">
      <div
        className="mx-auto max-w-screen-xl"
        style={{ color: "rgba(170, 181, 205, 1)" }}
      >
        <div className="p-6 flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Left section */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <h3 className="text-xl font-bold text-white">Skills Squid</h3>
            <p className="w-full md:w-[247px]">Your Gateway to Growth!</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="hover:text-orange-200 transition" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="hover:text-orange-200 transition" />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="hover:text-orange-200 transition" />
              </a>
            </div>
          </div>

          {/* Right section with links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full">
            <div>
              <h3
                className="text-md font-semibold mb-4 text-amber-200"
                style={{ color: "rgba(255, 162, 41, 1)" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {["Home", "About", "Service", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-orange-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-md font-semibold mb-4 text-amber-200"
                style={{ color: "rgba(255, 162, 41, 1)" }}
              >
                Contact
              </h3>
              <ul className="space-y-2 text-sm">
                {["info@skillsquid.com", "+1 234 567 890"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-orange-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-md font-semibold mb-4 text-amber-200"
                style={{ color: "rgba(255, 162, 41, 1)" }}
              >
                Follow us
              </h3>
              <div className="flex gap-4">
                <a href="#" aria-label="Instagram">
                  <FaInstagram className="hover:text-orange-200 transition" />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook className="hover:text-orange-200 transition" />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube className="hover:text-orange-200 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-orange-100 pt-6 text-center text-sm">
          <p>&copy; 2024 Skills Squid. All rights reserved.</p>
          <p className="mt-2">
            <a
              href="#"
              className="text-emerald-200 hover:text-white transition"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#"
              className="text-emerald-200 hover:text-white transition"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
