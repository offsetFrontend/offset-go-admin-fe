import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects"
import Retirements from "./pages/Retirements.jsx"
import TransferRequest from "./pages/TransferRequest.jsx"

function App() {
  return (
    <main className="font-spaceGrotesk bg-[#F4F6FA] min-h-screen flex max-w-screen-2xl mx-auto">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/retirements" element= {<Retirements />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/transfer-request" element= {<TransferRequest />} />
        <Route path="*" element={<p>Path doesn't exist</p>} />
      </Routes>
    </main>
  );
}

export default App;
