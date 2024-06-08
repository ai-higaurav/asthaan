import React from 'react';
import { SignIn as Login} from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';
import Loader from '../Loader';
const SignIn:React.FC = () => {
  const {isLoaded}=useAuth()

  if(!isLoaded){
    return <Loader/>
  }

  return (
    <div className='flex justify-center items-center'>
        <section className='mt-48'>
            <Login signUpUrl='/signup' />           
        </section>
    </div>
   
  );
};

export default SignIn;