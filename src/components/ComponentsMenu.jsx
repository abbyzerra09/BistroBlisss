function ComponentsMenu() {
    return (
      <>
        <div className="flex flex-col pb-10">
          <div className="flex justify-center mt-10 md:mt-20">
            <h2 className="text-3xl font-serif md:text-5xl text-zinc-800 ">Browse Our Menu</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {/* First Card */}
            <div className="border border-gray-400 rounded-2xl text-center h-90 mt-10 mr-10 ml-10 md:ml-8 md:mr-8">
                <div className="w-15 h-15 mx-auto mt-8 flex justify-center items-center text-4xl bg-gray-300 rounded-full">
                    <i className="fa-solid fa-mug-hot text-zinc-800 cursor-pointer"></i>
                </div>
                <div>
                    <h2 className="mt-5 text-center font-semibold text-2xl">Breakfast</h2>
                </div>
                <div>
                    <p className="mt-8 ml-3 max-w-[90%] font-semibold text-center text-zinc-800">In the new era of technology we look in the future with certainty and pride for our life.</p>
                </div>
                <button className="mt-10 font-semibold text-red-500 cursor-pointer hover:scale-102 hover:underline transition">
                    Explore Menu
                </button>
            </div>

            {/* Second Card */}
            <div className="border border-gray-400 rounded-2xl text-center h-90 mt-10 mr-10 ml-10 md:ml-8 md:mr-8">
                <div className="w-15 h-15 mx-auto mt-8 flex justify-center items-center text-4xl bg-gray-300 rounded-full">
                    <i className="fa-solid fa-bowl-food text-zinc-800 cursor-pointer"></i>
                </div>
                <div>
                    <h2 className="mt-5 text-center font-semibold text-2xl">Main Dishes</h2>
                </div>
                <div>
                    <p className="mt-8 ml-3 max-w-[90%] font-semibold text-center text-zinc-800">In the new era of technology we look in the future with certainty and pride for our life.</p>
                </div>
                <button className="mt-10 font-semibold text-red-500 cursor-pointer hover:scale-102 hover:underline transition">
                    Explore Menu
                </button>
            </div>

            {/* Third Card */}
            <div className="border border-gray-400 rounded-2xl text-center h-90 mt-10 mr-10 ml-10 md:ml-8 md:mr-8">
                <div className="w-15 h-15 mx-auto mt-8 flex justify-center items-center text-4xl bg-gray-300 rounded-full">
                    <i className="fa-solid fa-whiskey-glass text-zinc-800 cursor-pointer"></i>
                </div>
                <div>
                    <h2 className="mt-5 text-center font-semibold text-2xl">Drinks</h2>
                </div>
                <div>
                    <p className="mt-8 ml-3 max-w-[90%] font-semibold text-center text-zinc-800">In the new era of technology we look in the future with certainty and pride for our life.</p>
                </div>
                <button className="mt-10 font-semibold text-red-500 cursor-pointer hover:scale-102 hover:underline transition">
                    Explore Menu
                </button>
            </div>

            {/* Forth Card */}
            <div className="border border-gray-400 rounded-2xl text-center h-90 mt-10 mr-10 ml-10 md:ml-8 md:mr-8">
                <div className="w-15 h-15 mx-auto mt-8 flex justify-center items-center text-4xl bg-gray-300 rounded-full">
                    <i className="fa-solid fa-ice-cream text-zinc-800 cursor-pointer"></i>
                </div>
                <div>
                    <h2 className="mt-5 text-center font-semibold text-2xl">Desserts</h2>
                </div>
                <div>
                    <p className="mt-8 ml-3 max-w-[90%] font-semibold text-center text-zinc-800">In the new era of technology we look in the future with certainty and pride for our life.</p>
                </div>
                <button className="mt-10 font-semibold text-red-500 cursor-pointer hover:scale-102 hover:underline transition">
                    Explore Menu
                </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default ComponentsMenu