// import AboutImg from "./../assets/img/heropageimg.png";

function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 sm:items-center">
        <div className="p-4 flex gap-10 flex-col">
          <h3 className="font-bold text-4xl">About of Skills Squad</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus odio
            fuga vitae quae. Totam. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Reprehenderit, quaerat.
          </p>
          <button className="cursor-pointer px-6 py-3 bg-amber-500 rounded-md  text-white font-bold">
            Learn More
          </button>
        </div>
        <div className="">
          <img className="rounded-4xl p-4" src="https://www.letsbuild.com/wp-content/uploads/2023/07/construction-quality-management-101.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
