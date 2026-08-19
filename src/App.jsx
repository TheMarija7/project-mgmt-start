import NoProjectSelected from "./components/NoProjectSelected";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex min-h-screen">
      <Projects />
      <NoProjectSelected />
    
    </div>
  );
}

export default App;
