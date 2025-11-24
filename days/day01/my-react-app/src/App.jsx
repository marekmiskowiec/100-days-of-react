import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TodoApp from "./pages/Todoapp.jsx";
import TemperatureConvert from "./temperature/TemperatureConvert.jsx";

function App() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/todoapp">To-Do App</Link> |{" "}
        <Link to="/temperatureconvert">Temperature Convert</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/temperatureconvert" element={<TemperatureConvert />} />
      </Routes>
    </>
  );
}

export default App;
