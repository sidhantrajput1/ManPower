// import HeroPageImg from "./../assets/img/heropageimg.png";

function HeroPage() {
  return (
    <div className="bg-gray-50 px-4">
      <div className="mx-auto max-w-7xl  py-32 ">
        <div className="flex flex-col gap-8 items-center justify-center">
          <h3 className="text-4xl font-bold">Your Gateway to Growth</h3>
          <p className="sm:w-2xl px-2 text-center">
            At Skill Sqoud, we bridge the gap between skilled professionals and
            top employers. Whether you are looking for the right job or the
            perfect candidate, we have got you covered.
          </p>
          <div className="flex gap-6">
            <button className="text-white bg-black py-2 px-6 text-sm rounded-md cursor-pointer">
              Get Started
            </button>
            <button className="bg-white text-black border py-2 px-6 text-sm rounded-md cursor-pointer">
              Hire Talent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
