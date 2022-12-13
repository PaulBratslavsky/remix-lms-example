import { useState } from "react";

function Faq({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = faq;
  return (
    <div className="w-full xl:w-4/5 shadow-md p-4">
      <div className="flex py-2 xl:py-4 justify-between items-center">
        <h1 className="text-color-gray-light tracking-wide">{question}</h1>
        <div data-menu className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`icon icon-tabler icon-tabler-chevron-down transition duration-300 ease-out ${
              isOpen ? "rotate-0" : "rotate-90"
            }`}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#718096"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

        <ul className={`border-t border-gray-200 transition duration-300 ${isOpen ? "" : "hidden"}`}>
          <li className="sm:pt-4 sm:pb-8 pt-2 pb-4">
            <p className="xl:w-10/12 w-full text-gray-600 text-sm">{answer}</p>
          </li>
        </ul>
  
    </div>
  );
}

export default function Faqs({ data}) {
  const { heading, description, SingleFaq } = data;
  return (
    <div className="mx-auto container px-4 xl:px-0 my-24">
      <h1 className="text-center text-color-gray text-2xl lg:text-5xl font-bold tracking-wider leading-10">
        {heading}
      </h1>
      <h2 className="text-center text-color-gray-light text-base lg:text-lg tracking-wide mt-5">
        {description}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 my-20 text-lg">
        {SingleFaq.map((faq, index) => (
          <Faq key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}
