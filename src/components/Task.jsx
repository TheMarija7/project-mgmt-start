export default function Task({task, onClearTask}){

    return(
        <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded">
            <p className="text-black flex-1">{task}</p>
            <button className="bg-gray-100 text-black border border-gray-300 px-4 py-1 rounded hover:bg-gray-200"
                onClick={onClearTask}
            >
                Clear 
            </button>
        </div>
    );
}