import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<p>Path doesn't exist</p>}/>
      </Routes>
    </div>
  );
}

export default App;
