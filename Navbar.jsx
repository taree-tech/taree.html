import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";


function Navbar(){
    

    return(
    <div className="flex justify-between mainContainer items-center py-3 px-20 border-b-2">
        <div >
            {/*logo and links container*/ }
    
        <Link to="/"><button className="mr-10 text-xl font-bold ">DryBites</button></Link>
        {/*desktop menu links*/}
        <Link to="/"><button className="mr-5 text-textColorLight">Home</button></Link>
        <Link to="/category"><button className="mr-5 text-textColorLight">shop</button></Link>
        <Link to="/aboutus"><button className="mr-5 text-textColorLight">About Us</button> </Link>
        <Link to="/services"><button className="mr-5 text-textColorLight">Services</button></Link>
        </div>
        <div className="flex items-center ">
        <button className="ml-5 btn1 "><CiShoppingCart className="w-10 h-6" /></button>
        <button className="ml-5 btn1"><CiSearch className="w-10 h-6" /></button>
        <button className="ml-5 border-2 btn2">Sign in</button>
        <button className="ml-5 btn2 bg-btnColorLight  ">Contact us</button>
       
        </div>

    </div>
)
    
}
export default Navbar;