import Trusted from "./../assets/img/Trusted.png";
import School from "./../assets/img/school.png";
import Handshake from "./../assets/img/handshake.png";

function WhyChoose() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-18">
        <div className="space-y-10">
        <h3 className="text-center font-bold text-2xl">Why Choose Us?</h3>
        <div className="grid grid-cols-3 gap-14">
          <div className="bg-white p-4 rounded-lg space-y-4">
            <div className="space-y-2">
              <img src={Trusted}   className="bg-black rounded-full p-2 h-14" alt="" />
              <h3 className="font-bold">Trusted Partners</h3>
            </div>
            <p>Trusted by leading businesses and job seekers</p>
          </div>
          <div className="bg-white p-4 rounded-lg space-y-4">
            <div className="space-y-2">
              <img src={School}  className="bg-black rounded-full p-2 h-14" alt="" />
              <h3 className="font-bold">Training Programs</h3>
            </div>
            <p>Comprehensive training programs for career growth</p>
          </div>
          <div className="bg-white p-4 rounded-lg space-y-4">
            <div className="space-y-2">
              <img src={Handshake} className="bg-black rounded-full p-2 h-14" alt="" />
              <h3 className="font-bold">Complete Solutions</h3>
            </div>
            <p>End-to-end recruitment solutions</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
