import React from 'react';
import { Search , UserRound , Building} from 'lucide-react';
const Feature :React.FC = () => {
  return (
    <div className='flex  justify-center items-center'>
        <section className='w-full max-w-[1440px] py-10 flex flex-col gap-20   px-5 '>
            <h1  className='text-2xl lg:text-4xl font-ModerEraBlack px-3'>Why Choose Us ?</h1>

       <section className='flex flex-col  gap-10 lg:gap-5  items-center lg:flex-row'>
        <section>
                    <div className='max-w-[600px] w-full relative flex flex-col gap-5 bg-gray-200 px-10 py-10 rounded-bl-[35px]'> 
                        <div className='bg-orange-600 w-fit px-5 py-5 text-white rounded-bl-[20px] absolute -top-5'>
                            <Search className='w-full'/>
                        </div>
                        <h1 className='mt-5 font-ModernEraMedium font-semibold text-xl'>Search Property From Anywhere</h1>
                        <p>Explore a diverse range of properties from the comfort of your own home or on the go. Our user-friendly online platform makes it easy to find your dream property, no matter where you are. With detailed listings and powerful search tools, your perfect home is just a few clicks away. Start searching today and discover the ideal property for you!</p>
                    </div>
                </section>

                <section>
                    <div className='max-w-[600px] w-full relative flex flex-col gap-5 bg-gray-200 px-10 py-10 rounded-bl-[35px]'> 
                        <div className='bg-orange-600 w-fit px-5 py-5 text-white rounded-bl-[20px] absolute -top-5'>
                            <UserRound className='w-full'/>
                        </div>
                        <h1 className='mt-5 font-ModernEraMedium font-semibold text-xl'>Professional & Friendly Agent</h1>
                        <p>Connect with our team of professional agents who are dedicated to providing expert guidance and personalized service. Whether you're buying, selling, or renting, our friendly agents are here to help. With their expertise and commitment to excellence, you can trust them to navigate you through every step of the real estate process. Get in touch with us today and let us help you achieve your property goals!</p>
                    </div>
                </section>

                <section>
                    <div className='max-w-[600px] w-full relative flex flex-col gap-5 bg-gray-200 px-10 py-10 rounded-bl-[35px]'> 
                        <div className='bg-orange-600 w-fit px-5 py-5 text-white rounded-bl-[20px] absolute -top-5'>
                            <Building className='w-full'/>
                        </div>
                        <h1 className='mt-5 font-ModernEraMedium font-semibold text-xl'>Buy & Sale Awesome Properties</h1>
                        <p>Unlock a world of great properties with us! From charming starter homes to luxurious estates, we have something for everyone. Our portfolio is filled with exceptional properties waiting to be discovered. Whether you're a buyer or seller, our team is committed to delivering outstanding service and results. Start your property journey with us today and find the perfect property for you!</p>
                    </div>
                </section>
       </section>

        </section>
    </div>
  );
};

export default Feature;