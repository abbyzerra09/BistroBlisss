import logo from '/toplogo.png'
import { Link } from 'react-router-dom';
function Footer() {
    return(
        <>
        <div className="bg-neutral-700 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
            <img src={logo} className="mb-4" />
            <h2 className="text-3xl font-serif italic mb-4 hover:text-red-700 transition duration-150 cursor-pointer">Bistro Bliss</h2>
            <p className="text-gray-300">In the new era of technology we look in the future with certainty and pride for our company.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:contents">
        <div>
            <h4 className="font-medium text-xl mb-4">Pages</h4>
            <ul className="space-y-2">
                <li className="hover:text-red-500 cursor-pointer transition duration-150">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">Pricing</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">Blog</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">Contact</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">
                    <Link to="/Delivery">Delivery</Link>
                </li>
            </ul>
            </div>

        <div>
            <h4 className="font-medium text-xl mb-4">Utility Pages</h4>
            <ul className="space-y-2">
                <li className="hover:text-red-500 cursor-pointer transition duration-150">Start Here</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">StyleGuide</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">Licenses</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">Password Protection</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">404 not Found</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">Changelog</li>
                <li className="hover:text-red-500 cursor-pointer transition duration-150">View More</li>
            </ul>
            </div>
            </div>

        <div>
            <h4 className="font-medium text-xl mb-4">Our Social Media</h4>
        <div className="flex gap-4 text-2xl">
            <i className="fa-brands fa-twitter cursor-pointer hover:text-blue-400 transition duration-150"></i>
            <i className="fa-brands fa-instagram cursor-pointer hover:text-pink-500 transition duration-150"></i>
            <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-600 transition duration-150"></i>
            <i className="fa-brands fa-github cursor-pointer hover:text-gray-400 transition duration-150"></i>
        </div>
        </div>

    </div>
</div>

        </>
    );
}
export default Footer