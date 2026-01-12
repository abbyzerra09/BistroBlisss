import background from "../assets/bg.jpg";
function Hero() {
  return (
    <>
      <div className="relative heroSection">
        <div className="relative w-full h-[45vh] md:h-screen">
          <img
            className="absolute w-full h-full object-cover"
            src={background}></img>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-auto text-center px-4 max-w-3xl">
            <p className="text-md md:text-lg md:font-semibold text-black">Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>

            <h1 className="text-4xl font-serif text-zinc-800 md:text-5xl lg:text-7xl">Best Food For <br /> Your Taste</h1>

            <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 justify-center">
                <button className="px-4 py-3 mt-2 font-semibold bg-rose-700 text-white rounded-full hover:bg-rose-800 transition">
                    Book a Table
                </button>
                <button className="px-4 py-3 mt-2 font-semibold border border-gray-800 rounded-full hover:bg-black hover:text-white transition duration-200">
                    Explore Menu
                </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Hero;