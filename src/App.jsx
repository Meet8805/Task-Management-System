import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home.jsx";
import Layout from "./Layout.jsx"
import Task from "./components/taskmanager/Task.jsx"

function App() {
  
  return(
    <>
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/taskmanager" element={<Task />}/>
      </Route>
    </Routes>
    </>
  );



}

export default App
