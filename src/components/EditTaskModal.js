import React from 'react';

const EditTaskModal = ({ updateTask }) => {
    console.log(updateTask);

    const handleUpdatedTask = e => {
        e.preventDefault();

        const taskItem = e.target.task.value;

        const updatedTask = { taskItem };

        fetch(`http://localhost:5000/task/${updateTask._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Task added successfully');
                e.target.reset();
            });
    };
    return (
        <div>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer ">
                <label class="modal-box relative  w-11/12 max-w-5xl" for="">
                    <h3 class="text-lg font-bold"> Current Task: {updateTask.taskItem}</h3>

                    <form onSubmit={handleUpdatedTask} className='flex flex-col shadow-2xl w-52 lg:w-1/2 p-6 rounded-lg m-auto mt-5 border'>

                        <input type="text" name='task' required placeholder="Write your task here" className="input input-bordered w-auto text-lg" />
                        <p className='font-bold mt-1'> Press The Button or, Press Enter on Keyboard </p>
                        <input className="btn btn-secondary bg-gradient-to-r from-orange-400 to-yellow-500 mt-2 text-lg font-serif" type="submit" value="Confirm?" />

                    </form>
                </label>
            </label>
        </div>
    );
};

export default EditTaskModal;