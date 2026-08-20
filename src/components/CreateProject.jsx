
import {useState, useRef} from 'react';
import Input from './Input';


export default function CreateProject({projects, onSave, onCancel}) {

    const title= useRef();
    const description = useRef();
    const dueDate= useRef();
    const [error, setError] = useState("");

    function handleSaveClick() {
        let inputTitle= title.current.value;
        let inputDescription = description.current.value;
        let inpitDueDate = dueDate.current.value;
        
   
        if (!inputTitle.trim() || !inputDescription.trim() || !inpitDueDate) {
            setError("All fields are required!");
            return;
        }
        
        setError(""); 
        onSave(inputTitle, inputDescription, inpitDueDate);
    }

   
    return (
        <menu className="w-3/4 min-h-screen flex flex-col items-center justify-center text-center relative">
            {/* Buttons */}
            <div className="absolute top-8 right-8 flex gap-4">
                <button className="bg-white text-black border border-gray-300 px-6 py-2 rounded hover:bg-gray-100"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                    onClick={handleSaveClick}
                >
                    Save
                </button>
            </div>

            {/* Form Fields */}
            <div className="w-full max-w-md space-y-6">
                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}
                
                <Input label={"TITLE"} type={"text"} inputRef={title} />
                <Input label={"DESCRIPTION"} type={"text"} inputRef={description} />
                <Input label={"DUE DATE"} type={"date"} inputRef={dueDate} />

            </div>
        </menu>
    );
}