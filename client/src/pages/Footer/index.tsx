import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';

const Footer:React.FC = () => {
  return (
    <footer className='w-full flex justify-center items-center py-10'>
        <div className='w-full max-w-[1440px] grid grid-cols-1 gap-10 px-10 sm:px-5 sm:grid-cols-2 lg:grid-cols-4 '>
            <section className=' flex flex-col gap-5'>
                <h1 className='font-semibold text-xl'>About Us</h1>
                <section>
                    <p>Welcome to Asthaan - your go-to destination for buying, selling, and renting property. Simplifying real estate journeys with our user-friendly platform. Discover your perfect property today.</p>
                </section>
                <section className='flex gap-5'>
                    <span><Facebook className='text-orange-600' size={30}/></span>
                    <span><Instagram className='text-orange-600' size={30}/></span>
                    <span><Twitter className='text-orange-600' size={30}/></span>
                </section>
            </section>

            <section  className=''>
                <h1 className='font-semibold text-xl'>Other Links</h1>
                <section className='flex flex-col items-start mt-5 gap-3 '>
                    <button>Register</button>
                    <button>Fourm</button>
                    <button>Affiliate</button>
                    <button>FAQ</button>
                </section>
            </section>

            <section  className=''>
                <h1 className='font-semibold text-xl'>Related Links</h1>
                <section className='flex flex-col items-start mt-5 gap-3 '>
                    <button>About Us</button>
                    <button>Why buy with us ?</button>
                    <button>Our Agent</button>
                    <button>Contact us</button>
                </section>
            </section>

            <section  className=''>
                <h1 className='font-semibold text-xl'>Resources</h1>
                <section className='flex flex-col items-start mt-5 gap-3 '>
                    <button>Terms</button>
                    <button>License</button>
                    <button>Become an affiliate</button>
                    <button>Help Center</button>
                </section>
            </section>
        </div>
    </footer>
  );
};

export default Footer;