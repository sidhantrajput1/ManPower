/* eslint-disable react/prop-types */
import { useState } from "react";

const Data = [
  {
    id: "1",
    question: "How do I register for Skill Sqoud’s job placement services?",
    answer:
      "Simply visit our website, create an account, and upload your resume to get started.",
  },
  {
    id: "2",
    question: "What industries does Skill Sqoud cater to?",
    answer:
      "We serve a wide range of industries including IT, healthcare, finance, manufacturing, and more.",
  },
  {
    id: "3",
    question: "Do you provide certification after training?",
    answer:
      "Yes, we offer industry-recognized certifications upon successful completion of our training programs.",
  },
  {
    id: "4",
    question: "How do employers partner with Skill Sqoud?",
    answer:
      "Employers can contact us directly or fill out our partnership form on our website to discuss recruitment needs.",
  },
];

function Accordian() {
//   const [isActive, setIsActive] = useState(false);

  return (
      <div className="bg-[#fafafa] py-6 ">
        {Data.map((data, idx) => (
          <Dropdown
            key={idx}
            question={data.question}
            answer={data.answer}
            // isActive={isActive}
            // setIsActive={setIsActive}
          />
        ))}
      </div>
  );
}

function Dropdown({ question , answer }) {
    const [isActive, setIsActive] = useState(false);
  return (
    <div onClick={() => setIsActive(!isActive)} className="cursor-pointer max-w-7xl mx-auto">

        <div className="my-3 p-6 bg-white rounded-lg shadow-sm relative">
            <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[#FFA229]  to-[#1C4670] rounded-l-lg"></div>
            <div className="flex justify-between">
                <span className="text-xl">{question}</span>
                <span className="cursor-pointer font-bold">{isActive ? "-" : "+"}</span>
            </div>
            {isActive && <div className="text-gray-500 mt-3">{answer}</div>}
        </div>
    </div>
  );
}

export default Accordian;
