import React from 'react';

const Card:React.FC = () => {
  return (
    <div className="flex flex-col gap-10 items-center rounded-sm border px-3 py-5">
                <section className="">
                    <img src="./images/image.png" alt="image" className="rounded-bl-[25px] max-w-[300px] " />
                </section>
              <section className='w-full pl-3'>
                    <section>
                            <h2 className="font-bold text-lg">Tomin Villa , Dehradun</h2>
                        </section>
                        <section>
                            <span>150 Sq.Ft | </span>
                            <span>80.2 Lac | </span>
                            <span>Ready To Move</span>
                            <hr className="mt-3"/>                    
                        </section>
                        <section>
                            <button className="bg-blue-600 px-4 py-2 mt-5 text-white">View Details</button>
                        </section>
              </section>
            </div>
  );
};

export default Card;