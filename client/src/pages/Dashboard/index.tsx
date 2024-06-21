import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Building,
  User,
  Settings,
  LogOut,
  Inbox} from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { SignOutButton  } from '@clerk/clerk-react';

import SideBar from '../Drawer';
import { SkeletonCard } from '../Skelton';
import AddProperty from '../AddProperty';


const Dashboard:React.FC = () => {
  const {user , isLoaded}=useUser()
  const [state , setState]=useState<string>('dashboard')


  return (
    <div className='flex justify-center items-center'>
        <section className='w-full max-w-[1440px] border flex'>
            <section className='md:2/12 xl:basis-2/12 sm:basis-4/12  h-screen bg-gray-900 sm:flex flex-col justify-between hidden'>

              <section>
                {
                  !isLoaded ? 
                  <SkeletonCard/>
                  :
                  <div className='overflow-hidden flex justify-center items-center mt-10 mb-10 '>
                  <img src={user?.imageUrl} alt="" className='object-cover  w-36 h-36 rounded-full ' />
                </div>

                }
                  
                <Button onClick={()=>setState('dashboard')} className='bg-transparent text-white text-md rounded-none  hover:rounded-none py-[25px] hover:bg-orange-600 w-full  justify-start items-center'>
                  <LayoutDashboard className="mr-5" size={20}/> Dashboard
                </Button>
                <Button onClick={()=>setState('property')} className='bg-transparent text-white text-md rounded-none  hover:rounded-none py-[25px] hover:bg-orange-600 w-full  justify-start items-center'>
                  <Building className="mr-5" size={20}/> Property
                </Button>
                <Button className='bg-transparent text-white text-md rounded-none  hover:rounded-none py-[25px] hover:bg-orange-600 w-full  justify-start items-center'>
                  <User className="mr-5" size={20}/> Profile
                </Button>
                <Button className='bg-transparent text-white text-md rounded-none  hover:rounded-none py-[25px] hover:bg-orange-600 w-full  justify-start items-center'>
                  <Settings className="mr-5" size={20}/> Settings
                </Button>
              </section> 

              <section>
                {
                  isLoaded ? <>
                  <Button className='bg-transparent text-white text-md rounded-none  hover:rounded-none py-[25px] hover:bg-orange-600 w-full  justify-start items-center'>
                    <LogOut className="mr-5" size={20}/>
                      <SignOutButton redirectUrl='/'>
                        Logout
                      </SignOutButton>
                      
                    
                  </Button>
                  </>:
                  <Button className='bg-transparent text-white text-md rounded-none  hover:rounded-none py-[25px] hover:bg-orange-600 w-full  justify-start items-center'>
                  <LogOut className="mr-5" size={20}/>                   
                  please wait..
                </Button>
                }
              </section>  

            </section>
            <section className='sm:basis-8/12  flex-grow md:basis-10/12'>

              <section className='shadow-lg w-full'>
                <section className='flex w-full justify-between bg-gray-100 items-center py-3 px-3'>
                  <input type="search" placeholder='Search..' className='bg-white border border-gray-300 rounded-lg py-2 pl-10 ' />
                  <span className='flex justify-center items-center hover:cursor-pointer gap-3 '>
                   <Inbox className='text-orange-600 hover:text-gray-900'/>
                   <SideBar/>
                  </span>
                </section>
              </section>

              {
                state === 'property' ? <AddProperty/> : null
              }
            </section>
        </section>
    </div>
  );
};

export default Dashboard;