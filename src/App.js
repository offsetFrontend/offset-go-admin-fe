import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <main className="font-spaceGrotesk bg-[#F4F6FA] min-h-screen flex max-w-screen-2xl mx-auto">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Path doesn't exist</p>} />
      </Routes>
    </main>
  );
}

export default App;
