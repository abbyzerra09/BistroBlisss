import firstCustomer from '/firstCustomer.png'
import secondCustomer from '/secondCustomer.png'
import thirdCustomer from '/thirdCustomer.png'
function Customers() {
    return(
        <>
        <div className="mt-20">
            <h2 className="text-2xl md:text-5xl font-serif flex justify-center text-zinc-800">What Our Customers Say</h2>
            <div className="grid lg:grid-cols-3 min-[550px]:grid-cols-2 w-full md:gap-0 gap-5 md:mt-20 mt-10 pb-20">
                <div className="md:h-100 h-90 hover:scale-105 transition duration-300 hover:shadow-2xl md:ml-30 md:mr-0 ml-10 mr-10 rounded-3xl bg-stone-100">
                    <div className="md:max-w-80 md:ml-8 md:mr-0 ml-2 mr-2">
                    <h4 className="font-serif font-medium text-lg md:text-xl text-center md:text-start mt-10 text-red-800 md:font-semibold">“The best restaurant”</h4>
                    <p className="mt-5 text-center md:text-start font-medium">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                    </div>
                    <div className='flex gap-3 items-center mt-10 ml-5'>
                        <img className='scale-90 cursor-pointer' src={firstCustomer}></img>
                    <div className='text-md '>
                        <h5 className='font-medium'>Sophire Robson</h5>
                        <p>Los Angeles, CA</p>
                    </div>
                    </div>
                </div>
                <div className="md:h-100 h-90 hover:scale-105 transition duration-300 hover:shadow-2xl md:ml-15 ml-10 mr-10 rounded-3xl md:mr-15 bg-stone-100">
                    <div className="md:max-w-80 md:ml-8 md:mr-0 ml-2 mr-2">
                    <h4 className="font-serif font-medium text-lg md:text-xl text-center md:text-start mt-10 text-red-800 md:font-semibold">“Simply delicious”</h4>
                    <p className="mt-5 text-center md:text-start font-medium">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                    </div>
                    <div className='flex gap-3 items-center mt-10 ml-5'>
                        <img className='scale-90 cursor-pointer' src={secondCustomer}></img>
                    <div className='text-md '>
                        <h5 className='font-medium'>Matt Cannon</h5>
                        <p>San Diego, CA</p>
                    </div>
                    </div>
                </div>
                <div className="md:h-100 h-90 hover:scale-105 transition duration-300 hover:shadow-2xl rounded-3xl bg-stone-100 min-[550px]:col-span-2 min-[550px]:w-100 md:mt-10 lg:mt-0 min-[550px]:mx-auto lg:col-span-1 lg:w-auto lg:mx-0 lg:mr-30 ml-10 mr-10">
                    <div className="md:max-w-80 md:ml-8 md:mr-0 ml-2 mr-2">
                    <h4 className="font-serif font-medium text-lg md:text-xl text-center md:text-start mt-10 text-red-800 md:font-semibold">“One of a kind restaurant”</h4>
                    <p className="mt-5 text-center md:text-start font-medium">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
                    </div>
                    <div className='flex gap-3 items-center mt-10 ml-5'>
                        <img className='scale-90 cursor-pointer' src={thirdCustomer}></img>
                    <div className='text-md '>
                        <h5 className='font-medium'>Andy Smith</h5>
                        <p>San Francisco, CA</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Customers