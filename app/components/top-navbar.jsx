import { useState } from "react";
import { Link } from "@remix-run/react";

const navigation = [{ id: 2, text: "Lessons", href: "/lessons" }];

export default function TopNavbar({ menuItems }) {
  const mergedItems = [...menuItems, ...navigation];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-30 rounde bg-white p-4">
      <nav className="container mx-auto bg-purple-700 px-4 rounded-lg ">
        <div className="lg:flex justify-between w-full py-8 hidden">
          <Link to="/" className="text-white font-bold text-2xl">
            Strapi LMS
          </Link>
          <div className="lg:w-2/3 xl:w-1/2">
            <ul className="font-normal text-lg flex justify-end items-center text-color-gray-light">
              {mergedItems.map((link, index) => (
                <li
                  key={index}
                  className="cursor-pointer ml-4 bold text-white capitalize font-bold"
                >
                  <Link to={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="lg:hidden py-4 bg-purple-600 p-4 rounded-md">
        <div className="flex py-2 justify-between items-center">
          <div>
            <Link to="/" className="text-white font-bold text-xl">
              Strapi LMS
            </Link>
          </div>
          <div className="visible flex items-center">
            <ul
              id="list"
              className={`p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20 ${
                isOpen ? "" : "hidden"
              }`}
            >
              {navigation.map((link, index) => (
                <li
                  key={index}
                  className="text-xl flex flex-col cursor-pointer text-gray-600 leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center"
                >
                  <Link to={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
            <div className="xl:hidden">
              {isOpen ? (
                <svg
                  id="close"
                  className="close-m-menu"
                  onClick={() => setIsOpen((prev) => !prev)}
                  ariel-label="Close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  id="open"
                  onClick={() => setIsOpen((prev) => !prev)}
                  aria-haspopup="true"
                  ariel-label="Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="show-m-menu icon icon-tabler icon-tabler-menu"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
