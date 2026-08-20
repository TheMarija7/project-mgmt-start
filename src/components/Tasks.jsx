import Task from "./Task";
import {useRef} from 'react';

export default function Tasks({selectedProject, onClearTask, onAddTask}){

    const taskRef = useRef();

    function handleClearClickedTask(taskIndex){
        onClearTask(taskIndex);
    }

    function handleAddCurrentTask(){
        onAddTask(taskRef.current.value);
        taskRef.current.value = "";
    }

    return(
        <section className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Tasks</h2>
            
            <div className="flex gap-3 mb-6">
                <input 
                    ref={taskRef}
                    type="text"
                    placeholder="Add new task..."
                    className="flex-1 bg-gray-100 text-black border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
                />
                <button className="bg-white text-black border border-gray-300 px-6 py-2 rounded hover:bg-gray-100"
                    onClick={handleAddCurrentTask}
                >
                    Add Task
                </button>
            </div>
            {selectedProject.tasks && selectedProject.tasks.map((task, taskIndex)=>(
                <Task 
                    key={taskIndex}
                    task={task} 
                    onClearTask={()=> handleClearClickedTask(taskIndex)} 
                />
            ))}
            
        </section>  
    );
}