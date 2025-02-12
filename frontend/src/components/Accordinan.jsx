/* eslint-disable react/prop-types */
import { useState } from "react";

const Data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes, of course. It is very possible to create an accordion component with another framework.",
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
