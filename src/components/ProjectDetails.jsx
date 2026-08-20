export default function ProjectDetails({selectedProject, onDeleteProject}){

    return (
        <section className="pb-8 border-b border-gray-300">
            <div className="flex justify-between items-start mb-4">
                <h1 className="text-4xl font-bold">{selectedProject.title}</h1>
                <button className="bg-white text-black border border-gray-300 px-6 py-2 rounded hover:bg-gray-100"
                    onClick={onDeleteProject}
                >
                    Delete
                </button>
            </div>
            <p className="text-gray-500 text-sm mb-4">{selectedProject.dueDate}</p>
            <p className="text-gray-700 mt-6">{selectedProject.description}</p>
        </section>
    );
}