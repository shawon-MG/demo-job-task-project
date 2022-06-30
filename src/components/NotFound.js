import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div class="mockup-window border bg-base-300 w-1/2 mx-auto mt-8">
                <div class=" grid grid-cols-1 justify-center items-center px-2 py-8 bg-base-200">
                    <h1 className='text-2xl font-bold py-4 text-center'>Page Not Found <span className=' bg-red-600 font-bold text-white p-2 rounded-xl'> 404 </span></h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;