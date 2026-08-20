import ProjectDetails from "./ProjectDetails";
import Tasks from "./Tasks";

export default function EditProject({selectedProject, onClearTask, onAddTask, onDeleteProject}){


    return(
        <menu className="w-3/4 min-h-screen p-8">
            {/* Project Description Section */}
            <ProjectDetails 
                selectedProject={selectedProject} 
                onDeleteProject={onDeleteProject}
            />

            {/* Tasks Section */}
            <Tasks 
                selectedProject={selectedProject} 
                onClearTask={onClearTask}
                onAddTask={onAddTask}
            />          

        </menu>
    );
}