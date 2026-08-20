

export default function NoProjectSelected({ onCreateProject }) {

    return (
        <main className="w-3/4 min-h-screen flex flex-col items-center justify-center text-center">
            <img src="logo.png" alt="script" className="w-16 h-16 object-contain" />
            <h2 className="text-2xl font-bold">No project selected</h2>
            <p className="mt-4 text-gray-600">Select a project or get started with a new one</p>
            <button 
            className="mt-8 bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700" 
            onClick={onCreateProject}>
                Create new project
            </button>
        </main>
    );
}