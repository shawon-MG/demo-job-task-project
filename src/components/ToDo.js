import React, { useEffect, useState } from 'react';
import EditTaskModal from './EditTaskModal';

const ToDo = () => {
    const handleAddTask = e => {
        e.preventDefault();

        const taskItem = e.target.task.value;

        const task = { taskItem };

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Task added successfully');
                e.target.reset();
            });
    };

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    const [updateTask, setUpdateTask] = useState([]);


    return (
        <div id="to-do" className='text-center'>

            <form onSubmit={handleAddTask} className='flex flex-col shadow-2xl w-52 lg:w-1/2 p-6 rounded-lg m-auto mt-5 border'>

                <input type="text" name='task' required placeholder="Write your task here" className="input input-bordered w-auto text-lg" />
                <p className='font-bold mt-1'> Press The Button or, Press Enter on Keyboard </p>
                <input className="btn btn-secondary bg-gradient-to-r from-orange-400 to-yellow-500 mt-2 text-lg font-serif" type="submit" value="Add Task" />

            </form>

            <div className='flex  shadow-2xl rounded-lg justify-center w-5/6 pb-8 ml-32' >
                <div className='flex-col  mt-4'>

                    <h1 className=' mt-2 p-2 text-4xl rounded-lg font-serif  '> Your Tasks List </h1>

                    <div className='grid grid-cols-1 gap-1'>
                        {
                            tasks.map(task => <div class="card w-auto bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <div class="card-actions justify-end">

                                        <p className='font-bold'> {task.taskItem} </p>

                                        {/* <button class="btn btn-sm btn-primary bg-gradient-to-r from-orange-400 to-yellow-500 hover:from-green-500 hover:to-blue-500"> <span className='font-bold'> Edit Task </span> </button> */}

                                        <label onClick={() => setUpdateTask(task)} for="my-modal-4" class="btn modal-button">open modal</label>

                                        <div class="form-control">
                                            <label className="label cursor-pointer">
                                                <span className="label-text font-bold"> Task Completed? </span>
                                                <input type="checkbox" class="checkbox ml-2" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>

                    {
                        updateTask && <EditTaskModal updateTask={updateTask}></EditTaskModal>
                    }
                </div>
            </div>


        </div >

    );
};

export default ToDo;

// bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary