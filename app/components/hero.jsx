import { Link } from '@remix-run/react';
import HighlightedHeading from "~/components/highlighted-heading";

const baseUrl = "http://localhost:1337";

export default function Hero({ data }) {

  const { heading, text, Link: link, image } = data;
  const { url, alternativeText } = image.data.attributes;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center my-24 mx-4">
      <div>
        <div className="text-3xl lg:text-6xl xl:text-8xl text-color-gray tracking-1px font-extrabold">
          <HighlightedHeading
            heading={heading}
            color="text-color-purple"
            className="mt-2 lg:mt-0"
          />
        </div>
        <h2 className="text-lg lg:text-2xl tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-color-gray-light">
          {text}
        </h2>
        <Link
          to={link.href}
          className="flex w-1/3 focus:outline-none justify-center mt-5 lg:mt-10 text-lg lg:text-2xl font-medium text-white p-4 lg:p-8 bg-color-purple rounded-3xl"
        >
          {link.text}

        </Link>
      </div>
      <div className="w-full custom-height bg-purple-600 mt-8 lg:mt-0 rounded-3xl relative overflow-hidden">
        <img
          loading="lazy"
          className="custom-height object-cover "
          src={baseUrl + url}
          alt={alternativeText || "Generic Image"}
        />
      </div>
    </div>
  );
}
