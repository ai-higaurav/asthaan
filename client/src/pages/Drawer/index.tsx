import React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from '@/components/ui/button';
import { Ellipsis } from 'lucide-react';
  
const SideBar:React.FC = () => {
  
  return (
    <>
    <Drawer direction='left'>
        <DrawerTrigger><Ellipsis className='sm:hidden'/></DrawerTrigger>
        <DrawerContent className='w-fit h-svh rounded-none'>
            <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
    </>
  );
};

export default SideBar;