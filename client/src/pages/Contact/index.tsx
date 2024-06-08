import React from 'react';
import { Headset, Link, MapIcon, Mail } from 'lucide-react';
const Contact:React.FC = () => {
  return (
      <div className='w-full flex justify-center items-center bg-gray-200'>
          <section className='w-full max-w-[1440px] px-3 flex flex-col'>
              <section>
                <h1 className='text-4xl pt-10 font-ModerEraBlack py-5 px-3'>Any Question ? Reach Us </h1>
              </section>
              <section className='py-10 flex gap-5 items-center px-3 flex-wrap  justify-center xl:justify-between'>

                  <div className='max-w-[300px] w-full border h-56 flex flex-col  bg-white rounded-bl-[35px] justify-center items-center gap-5 '>
                      <div className='flex flex-col gap-3 justify-center items-center'>
                          <Headset className='text-5xl text-orange-600'  size={50}/>
                          <h1 className='font-ModernEraMedium text-xl'>Call Us</h1>
                      </div>
                      <section>
                          <h1 className='text-xl font-RobotoRegular'>+91 8057 235806</h1>
                      </section>
                  </div>

                  <div className='max-w-[300px] w-full border h-56 flex flex-col bg-white rounded-bl-[35px] justify-center items-center gap-5 '>
                      <div className='flex flex-col gap-3 justify-center items-center'>
                          <Link className='text-5xl text-orange-600'  size={50}/>
                          <h1 className='font-ModernEraMedium text-xl'>Website</h1>
                      </div>
                      <section>
                          <h1 className='text-xl font-RobotoRegular'>www.asthaan.com</h1>
                      </section>
                  </div>

                  <div className='max-w-[300px] w-full border h-56 flex flex-col bg-white rounded-bl-[35px] justify-center items-center gap-5 '>
                      <div className='flex flex-col gap-3 justify-center items-center'>
                          <MapIcon className='text-5xl text-orange-600'  size={50}/>
                          <h1 className='font-ModernEraMedium text-xl'>Location</h1>
                      </div>
                      <section>
                          <h1 className='text-xl font-RobotoRegular'>Rajpur Road , Dehradun</h1>
                      </section>
                  </div>

                  <div className='max-w-[300px] w-full border h-56 flex flex-col bg-white rounded-bl-[35px] justify-center items-center gap-5 '>
                      <div className='flex flex-col gap-3 justify-center items-center'>
                          <Mail className='text-5xl text-orange-600'  size={50}/>
                          <h1 className='font-ModernEraMedium text-xl'>Email</h1>
                      </div>
                      <section>
                          <h1 className='text-xl font-RobotoRegular'>info@asthaan.com</h1>
                      </section>
                  </div>


              </section>
          </section>
      </div>
  );
};

export default Contact;