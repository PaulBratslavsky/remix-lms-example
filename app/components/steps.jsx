export default function Steps({ data }) {
  const { heading, description, Step } = data;
  return (
    <div className="container mx-auto px-4 xl:px-0 my-12 lg:my-24">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="mt-12 text-color-gray text-2xl lg:text-5xl font-bold tracking-wider">
            {heading}
          </h1>
          <p className="lg:w-8/12 text-color-gray-light mt-5 mb-5 lg:mb-12">
            {description}
          </p>
        </div>
        <div className="flex justify-end w-full">
          <div className="flex flex-col items-center">
            {Step.map((step, index) => (
              <div key={index} className="flex ">
                <div className="flex flex-col items-center">
                  <div className="bg-color-purple w-24 h-24 flex items-center justify-center rounded-full">
                    <div className="text-4xl font-bold text-white">
                      {index + 1}
                    </div>
                  </div>
                  {data.Step.length !== index + 1 && (
                    <svg
                      className="my-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="97"
                      viewBox="0 0 12 97"
                      fill="none"
                    >
                      <circle cx="5.5" cy="4.5" r="4.5" fill="#C4C4C4" />
                      <circle cx="5.5" cy="25.5" r="4.5" fill="#C4C4C4" />
                      <circle cx="6" cy="49" r="6" fill="#C4C4C4" />
                      <circle cx="5.5" cy="71.5" r="4.5" fill="#C4C4C4" />
                      <circle cx="5.5" cy="92.5" r="4.5" fill="#C4C4C4" />
                    </svg>
                  )}
                </div>
                <div className="flex flex-col items-center ml-8 lg:ml-16">
                  <div className="w-9/12">
                    <h1 className="text-xl lg:text-4xl text-color-gray mt-6 lg:mt-0">
                      {step.heading}
                    </h1>
                    <p className="mt-2 tracking-wide leading-8 text-sm lg:text-base text-color-gray-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
