import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='flex w-full justify-center items-center overflow-hidden absolute top-0'>
            <section className='max-w-[1440px] flex justify-between items-center w-full  py-4 px-3'>
                <h1 className='uppercase text-xl  font-ModerEraBlack'>Asthaan</h1>
                <section className='flex gap-4 justify-center items-center'>
                    <div className='flex gap-4 justify-center items-center sm:text-xl'>
                        <section className='hidden sm:flex gap-4 justify-center items-center sm:text-xl text-gray-600'>
                            <Link to="/">Home</Link>
                            <Link to="/">Properties</Link>
                            <Link to="/">Agents</Link>
                            <Link to="/">Contact</Link>
                        </section>
                        <section className='flex gap-4 justify-center items-center sm:text-xl  text-gray-600 '>
                            <Link to="/">Log In</Link>
                            <Link to="/" className='bg-orange-600 text-white py-1 px-3 rounded-sm'>Sign Up</Link>
                        </section>
                    </div>
                </section>
            </section>
        </nav>
    );
};

export default Navbar;