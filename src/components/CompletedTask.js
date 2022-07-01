import React, { useEffect, useState } from 'react';

const CompletedTask = () => {
    const [completes, setCompletes] = useState([]);

    useEffect(() => {
        const role = "done";
        const url = `https://lit-lake-51780.herokuapp.com/complete-task?role=${role}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCompletes(data)
            )
    }, []);


    return (

        <div>
            <h1 className=' mt-12 p-2 text-4xl text-center rounded-lg font-serif'> Your Completed Tasks </h1>
            <div className='grid grid-cols-1 gap-1 '>
                {
                    completes.map(complete => <div class="card w-auto bg-base-100 shadow-xl">
                        <div class="card-body">
                            <div class="card-actions justify-end">

                                <p className='font-bold'> {complete.taskItem} </p>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CompletedTask;