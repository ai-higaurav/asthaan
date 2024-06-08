import React from 'react';
import { PulseLoader } from 'react-spinners';

const Loader:React.FC = () => {
  return (
    <>
       <div className='flex justify-center items-center w-full'>
            <section className='max-w-[1440px] w-full h-svh  flex justify-center items-center'>
                <PulseLoader color="#36d7b7" />
            </section>
       </div>
    </>
  );
};

export default Loader;