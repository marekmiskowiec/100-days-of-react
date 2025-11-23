import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TodoApp from "./pages/Todoapp.jsx";

function App() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/todoapp">To-Do App</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoapp" element={<TodoApp />} />
      </Routes>
    </>
  );
}

export default App;
