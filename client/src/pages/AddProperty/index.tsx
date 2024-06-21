import { Input } from '@/components/ui/input';
import React from 'react';

const AddProperty:React.FC = () => {
  return (
    <>
        <form action="">
            <section>
                <label htmlFor=""></label>
                <Input type='text' placeholder='Property'/>
            </section>
        </form>
    </>
  );
};

export default AddProperty;