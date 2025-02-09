import HeroPageImg from "./../assets/img/heropageimg.png";

function HeroPage() {
  return (
    <div className="bg-gradient-to-l from-blue-300 to-orange-200 sm:h-[60vh]">
      <div className="grid gap-x-10 p-4 max-w-7xl mx-auto grid-cols-1  sm:grid-cols-2 items-center justify-between">
        <div className="left flex flex-col gap-4 sm:gap-6 ">
          <h3 className="font-bold text-4xl sm:text-6xl">Welcome to <span className="text-red-600">Skill Squad</span></h3>
          <p className="text-gray-500">
            At Skill Squad, we specialize in providing skilled, semi-skilled,
            and unskilled manpower to meet the needs of industries of all sizes.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            voluptatum.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <button className="bg-sky-600 text-white p-3 px-6 rounded-lg font-semibold shadow-md hover:bg-sky-700 transition duration-300 ease-in-out">
              Learn More
            </button>
            <button className="bg-orange-500 text-white p-3 px-6 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
        <div className="sm:pt-14 pt-10 pl-15">
          <div className="relative">
            <img
              className="bg-gray-50 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]  rounded-full p-8 pl-14 bg-gradient-to-l from-orange-100/40 to-sky-100"
              src={HeroPageImg}
              alt="heropage-img"
            />
            <div className="absolute  shadow-xl bg-white p-2 px-5 -top-4  sm:-top-2 sm:right-19 right-16 rounded-2xl text-black">
                <p>Trusted by 500+ Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
