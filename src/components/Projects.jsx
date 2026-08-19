import { useState } from "react";

export default function Projects(){

    const [projects, setProjects] = useState([]);

    return(
        <aside className="w-1/4 min-h-screen bg-gray-800 text-white p-16">
            <h2 className="text-xl font-bold">YOUR PROJECTS</h2>
            <button className="mt-8 bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700">+ Add Project</button>
            <nav className="mt-6">
                <un className="list-none space-y-3">
                    <li><button className="mt-6 text-gray px-3 gray hover:bg-gray-700 text-lg ">Project 1</button></li>
                    <li><button className="mt-6 text-gray px-3 gray hover:bg-gray-700 text-lg ">Project 2</button></li>
                    <li><button className="mt-6 text-gray px-3 gray hover:bg-gray-700 text-lg ">Project 3</button></li>
                </un>
            </nav>
        </aside>
    );

}