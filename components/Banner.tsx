function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-5xl">FireHose AI</h1>
        <h2 className="mt-5 md:mt-0">
        <span className="underline decoration-2 decoration-[#e34747]">Welcome to the{" "}
          
          cutting-edge
          
          AI-powered website creation platform
          </span>{" "}
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in technology | Create stunning websites effortlessly | And More!!!
      </p>
    </div>
  );
}

export default Banner;
