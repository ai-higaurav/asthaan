import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { PulseLoader } from 'react-spinners';

const Navbar = () => {
    const {isSignedIn , isLoaded }=useAuth()

    return (
        <nav className='flex w-full justify-center items-center overflow-hidden absolute top-0'>
            <section className='max-w-[1440px] flex justify-between items-center w-full  py-4 px-3'>
                <h1 className='uppercase text-xl  font-ModerEraBlack'><Link to="/">Asthaan</Link></h1>
                <section className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center sm:text-xl'>
                        <section className='hidden sm:flex gap-4 justify-center items-center sm:text-xl text-gray-600'>
                            <a href="#properties">Properties</a>
                            <a href="#contactus">Contact</a>
                            
                        </section>
                        <section className='flex gap-4 justify-center items-center sm:text-xl  text-gray-600 '>
                            {
                                !isLoaded ? 
                                <PulseLoader color="#36d7b7"/>
                                :
                                isLoaded && isSignedIn ?                                
                                <UserButton />
                                :
                                 <>
                                <Link to="/signin">Log In</Link>
                                <Link to="/signup" className='bg-orange-600 text-white py-1 px-3 rounded-sm'>Sign Up</Link>
                                </>
                            }
                        </section>
                    </div>
                </section>
            </section>
        </nav>
    );
};

export default Navbar;