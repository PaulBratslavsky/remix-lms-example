import { Link } from "@remix-run/react";
import HighlightedHeading from "~/components/highlighted-heading";

export default function CallToAction({ data}) {
  const { heading, subHeading, Link: link } = data;

  return (
    <div id={"offer"} className="w-full flex justify-center items-center my-24">
      <div className="bg-white lg:w-8/12 shadow-lg py-8 px-8 rounded-2xl">
        <div className="lg:flex justify-between w-full">
          <div>
            <HighlightedHeading
              heading={heading}
              className="text-2xl lg:text-5xl text-color-gray font-bold tracking-wide"
              color="text-color-purple"
            />
            <h2 className="text-color-gray-light tracking-wide text-base lg:text-lg mt-6">
              {subHeading}
            </h2>
          </div>
          <div className="mt-4 lg:mt-0 flex-shrink-0">
            <Link to={link.href}
              className="py-2 lg:py-4 focus:outline-none px-4 lg:px-8 lg:text-2xl text-white bg-color-purple tracking-wider rounded-3xl font-bold"
            >
              {link.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
