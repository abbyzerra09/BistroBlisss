import aboutImg from '../assets/about.jpg'
import arrow from '../assets/arrow.png'

function AboutCard () {
    return (
      <>
        <div className="flex flex-col min-[400px]:flex-row justify-center items-center pb-10 md:pb-32 px-10 bg-stone-100">
          <div className="relative flex flex-col items-center min-[400px]:block mt-10">
            <h2 className="text-3xl md:text-4xl font-serif text-center md:mb-10">
              Contact Us Now!
            </h2>

            <img
              src={aboutImg}
              className="w-80 md:w-120 lg:w-140 h-auto rounded-2xl shadow-lg"
              alt="About Us"
            />
            <div className="z-10 bg-[#3d3a35] text-white p-6 rounded-3xl mt-5 w-[90%] min-[400px]:absolute min-[400px]:mt-0 min-[400px]:w-[70%]  min-[400px]:bottom-[-10%] min-[400px]:right-[-15%]  md:w-[60%] lg:w-75 lg:p-10">
              <h3 className="text-xl font-bold mb-4">Come Visit Us</h3>

              <div className="space-y-3 text-xs lg:text-sm">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-phone text-gray-300"></i>
                  <span>(414) 857 - 0107</span>
                </div>

                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-envelope text-gray-300"></i>
                  <span>happytummy@restaurant.com</span>
                </div>

                <div className="flex items-start gap-3">
                  <i className="fa-solid fa-location-dot mt-1 text-gray-300"></i>
                  <span>
                    837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                  </span>
                </div>
              </div>
              <div className="flex min-[400px]:hidden">
                <img src={arrow} className="absolute bottom-30 -left-15 rotate-15 -scale-x-100 w-35"
                />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-stone-100 pb-10'>
          <h2 className="text-2xl md:text-5xl font-serif text-center text-zinc-800">
            We provide healthy food for your family.
          </h2>
          <p className="hidden md:block text-md md:text-xl text-center mt-5 text-zinc-700">
            Our story began with a vision to create a unique dining experience
            that merges fine dining,
            exceptional service,<br /> and a vibrant ambiance. Rooted in city's rich
            culinary culture,
            we aim to honor our<br /> local roots while infusing a global palate.<br />
          </p>

          <p className=" md:hidden text-md md:text-xl text-center mt-5 text-zinc-700">
            Our story began with a vision to create a unique dining experience
            that merges fine dining,<br />
            exceptional service, and a vibrant ambiance. Rooted in city's rich
            culinary culture,<br />
            we aim to honor our local roots while infusing a global palate.<br />
          </p>
        </div>
      </>
    );
}

export default AboutCard