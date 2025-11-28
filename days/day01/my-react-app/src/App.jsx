import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TodoApp from "./pages/Todoapp.jsx";
import TemperatureConvert from "./temperature/TemperatureConvert.jsx";
import ProfileForm from "./features/forms/ProfileForm.jsx";
import JavaScriptFunctions from "./pages/JavaScriptFunctions.jsx";
import Course from "./pages/Course.jsx";

function App() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/todoapp">To-Do App</Link> |{" "}
        <Link to="/temperatureconvert">Temperature Convert</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/js">JavaScript Functions</Link> |{" "}
        <Link to="/course">Jonas React Course</Link> |{" "}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/temperatureconvert" element={<TemperatureConvert />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/js" element={<JavaScriptFunctions />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
