import caterings from '//caterings.jpg'
import birthdays from '//birthdays.jpg'
import weddings from '//weddings.jpg'
import events from '//events.jpg'
function Services() {
    return(
        <>
        <div className="flex flex-col justify-center items-center mt-10 md:mt-20 md:ml-10 mb-10">
            <h2 className="hidden md:block md:text-5xl font-serif ml-10 md:text-start text-zinc-800">We also offer unique <br/> services for your events</h2>
            <h2 className="md:hidden text-2xl font-serif text-center text-zinc-800">We also offer unique services for your events</h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2">
                <div className="h-100 mt-10 mr-10 ml-10 md:ml-8 md:mr-8">
                    <img className='rounded-2xl hover:scale-102 transition-all' src={caterings}></img>
                    <h3 className='text-2xl font-serif mt-2 ml-2'>Caterings</h3>
                    <p className='ml-2 font-sans max-w-sm'>In the new era of technology we look in the future with certainty for life.</p>
                </div>
                <div className="h-100 mt-10 mr-10 ml-10 md:ml-8 md:mr-8">
                    <img className='rounded-2xl hover:scale-102 transition-all' src={birthdays}></img>
                    <h3 className='text-2xl font-serif mt-2 ml-2'>Birthdays</h3>
                    <p className='ml-2 max-w-sm'>In the new era of technology we look in the future with certainty for life.</p>
                </div>
                <div className="h-100 mt-10 mr-10 ml-10 md:ml-8 md:mr-8">
                    <img className='rounded-2xl hover:scale-102 transition-all' src={weddings}></img>
                    <h3 className='text-2xl font-serif mt-2 ml-2'>Weddings</h3>
                    <p className='ml-2 font-sans max-w-sm'>In the new era of technology we look in the future with certainty for life.</p>
                </div>
                <div className="h-100 mt-10 mr-10 ml-10 md:ml-8 md:mr-8">
                    <img className='rounded-2xl hover:scale-102 transition-all' src={events}></img>
                    <h3 className='text-2xl font-serif mt-2 ml-2'>Events</h3>
                    <p className='ml-2 font-sans max-w-sm'>In the new era of technology we look in the future with certainty for life.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Services