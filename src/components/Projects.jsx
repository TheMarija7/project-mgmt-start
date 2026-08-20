import { useState } from "react";

export default function Projects({projects, onAddProject, onOpenProject}) {

    return(
        <aside className="w-1/4 min-h-screen bg-gray-800 text-white p-16">
            <h2 className="text-xl font-bold">YOUR PROJECTS</h2>
            <button className="mt-8 bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700" 
                onClick={onAddProject}
            >+ Add Project</button>
            <nav className="mt-6">
                <ul className="list-none space-y-3">
                    {projects && projects.map((project, projectIndex) =>(
                        <li key={projectIndex}><button className="w-full text-left px-3 py-2 text-white hover:bg-gray-700 text-lg rounded"
                        onClick={()=> onOpenProject(projectIndex)}
                        >
                            {project.title}</button></li>
                    ))}
                    
                </ul>
            </nav>
        </aside>
    );

}