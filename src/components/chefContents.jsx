import chef from '/chef.jpg'
import variousFoods from '/variousFoods.jpg'
import currySoup from '/currySoup.jpg'
function ChefContents() {
    return(
        <>
        <div className='h-auto bg-stone-100 flex flex-col max-[600px]:items-center lg:flex-row justify-center items-center mt-10 px-4 lg:px-0'>
                
            <div className='grid lg:grid-cols-2 grid-rows-2 grid-cols-1 mt-10 gap-2 max-w-4xl'>
                <div className='relative max-[959px]:ml-10 max-[720px]:-bottom-10 lg:block md:row-span-2 lg:h-150 lg:w-107.5 md:w-90 md:h-125 w-70 md:ml-15 max-[600px]:ml-0 max-[600px]:-mt-10'>
                    <img className="w-full h-full object-cover rounded-2xl hover:scale-105 transition duration-300" src={chef}></img>
                </div>
                <div className='md:h-83.25 w-72.5 md:ml-25 mt-5'>
                    <img className="hidden min-[1235px]:block w-full h-full object-cover hover:scale-105 transition duration-300" src={currySoup}></img>
                </div>
                <div className='md:h-60 w-72.5 md:ml-25 mt-5'>
                    <img className="hidden min-[1235px]:block w-full h-full object-cover hover:scale-105 transition duration-300" src={variousFoods}></img>
                </div>
            </div> 

                <div className='max-w-120 lg:mt-40 max-[959px]:max-w-180 max-[959px]:ml-10 max-[959px]:bottom-40 max-[600px]:-mt-60 max-[600px]:right-40 md:-mt-140 pb-20 max-[720px]:-mt-90 mr-10'>
                    <h2 className='lg:hidden text-3xl font-serif flex justify-center max-[462px]:text-center text-zinc-700'>Fastest Food Delivery in City</h2>
                    <h2 className='hidden lg:text-5xl font-serif lg:flex items-start text-zinc-700'>Fastest Food<br/> Delivery in City</h2>
                    <p className='text-xl lg:text-start md:text-center mt-1 max-[720px]:text-center text-zinc-700'>Our visual designer lets you quickly and of drag a down your<br/> way to customapps for both keep desktop. </p>

                    {/* first */}
                    <div className="flex lg:justify-start max-[420px]:justify-start justify-start lg:text-start items-center gap-3 mt-3 ">
                        <div className='px-3 py-2 rounded-full bg-red-800 hover:bg-red-900 transition duration-200'>
                            <i className="fa-regular fa-clock text-white cursor-pointer "></i>
                        </div>
                        <span className='mt-1 text-xl font-medium max-[385px]:max-w-55 text-zinc-700'>
                            Delivery within 30 minutes
                        </span>
                    </div>

                    {/* second */}
                    <div className="flex lg:justify-start max-[420px]:justify-start justify-start lg:text-start items-center gap-3 mt-3">
                        <div className='px-3 py-2 rounded-full bg-red-800 hover:bg-red-900 transition duration-200'>
                            <i className="fa-regular fa-bookmark text-white cursor-pointer "></i>
                        </div>
                        <span className='mt-1 text-xl font-medium text-zinc-700'>
                            Best Offer & Prices
                        </span>
                    </div>

                    {/* third */}
                    <div className="flex lg:justify-start max-[420px]:justify-start justify-start lg:text-start items-center gap-3 mt-3">
                        <div className='px-3 py-2 rounded-full bg-red-800 hover:bg-red-900 transition duration-200'>
                            <i className="fa-solid fa-cart-shopping text-white cursor-pointer "></i>
                        </div>
                        <span className='mt-1 text-xl font-medium text-zinc-700'>
                            Online Services Available
                        </span>
                    </div>
            </div>
            
        </div>
        </>
    );
}

export default ChefContents