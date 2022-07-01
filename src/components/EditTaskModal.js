import React from 'react';

const EditTaskModal = ({ updateTask }) => {
    console.log(updateTask);
    return (
        <div>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <h3 class="text-lg font-bold">{updateTask._id}</h3>
                    <p class="py-4">{updateTask.taskItem}</p>
                </label>
            </label>
        </div>
    );
};

export default EditTaskModal;