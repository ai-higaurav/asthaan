import React from 'react';
import { SignUp as Register, useAuth } from '@clerk/clerk-react';
import Loader from '../Loader';
const SignUp:React.FC = () => {
  const {isLoaded} = useAuth()
  
  if(!isLoaded){
    return <Loader/>
  }

  return (
    <div className='flex justify-center items-center'>
      <section className='mt-48'>
            <Register signInUrl='/signin'/>
      </section>
    </div>
  );
};

export default SignUp;