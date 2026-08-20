import NoProjectSelected from "./components/NoProjectSelected";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import EditProject from "./components/EditProject";
import { useState } from "react";

function App() {
  const [pageState, setPageState] = useState("noProjectSelected");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [projects, setProjects] = useState([])

  function handleChangePageState(state){
    setPageState((previousState) => state);
  }

  function handleSave(ptitle, pdescription, pdueDate, tasks){
    setProjects((prevProjects) =>{
      const newProjects = [...prevProjects,
        {
          title: ptitle,
          description: pdescription,
          dueDate: pdueDate,
          tasks: tasks || []
        }
      ];
      console.log(newProjects);
      return newProjects;
    });
    
    handleChangePageState("noProjectSelected");
  }

  function handleOpenProject(projectIndex){
    setSelectedProjectIndex((prevSelectedProjectIndex) => projectIndex);
    handleChangePageState("editProject");
  }

  function handleClearTask(taskIndex){
    setProjects((prevProjects) => {
      const newProjects = [...prevProjects];
      newProjects[selectedProjectIndex].tasks.splice(taskIndex, 1);
      return newProjects;
    });
  }

  function handleAddTask(taskDesc){
    setProjects((prevProjects) => {
      const newProjects = [...prevProjects];
      const updatedProjects = {
        ...newProjects[selectedProjectIndex],
        tasks: [
          ...newProjects[selectedProjectIndex].tasks,
          taskDesc
        ]
      };
      newProjects[selectedProjectIndex]=updatedProjects;
      return newProjects;
    })
  }

  function handleDeleteProject(){
    setProjects((prevProjects) =>{
      return prevProjects.filter((_, index) => index !== selectedProjectIndex);
    }) 
    handleChangePageState("noProjectSelected");
    setSelectedProjectIndex(null);
  }

  return (
    <div className="flex min-h-screen">
      <Projects  
        projects={projects} 
        onAddProject={()=> handleChangePageState("createProject")}
        onOpenProject={handleOpenProject}
        
      />
      {pageState==="noProjectSelected" && 
      <NoProjectSelected 
        onCreateProject={()=> handleChangePageState("createProject")}/>
      }
      {pageState==="createProject" && 
        <CreateProject 
          projects={projects} 
          onSave={handleSave} 
          onCancel={()=>handleChangePageState("noProjectSelected")}/>
      }
      {pageState==="editProject" &&
        <EditProject 
          selectedProject={projects[selectedProjectIndex]}
          onClearTask={handleClearTask}
          onAddTask={handleAddTask}
          onDeleteProject={handleDeleteProject}
        />
      }
      
    </div>
  );
}

export default App;
