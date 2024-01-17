import Home from "./components/Home";
import Screen  from "./components/screen"
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Rooms from './components/scrollbar'
import List from "./components/searchpage";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/rooms"  element={<List />} />
      <Route path="/booking" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;