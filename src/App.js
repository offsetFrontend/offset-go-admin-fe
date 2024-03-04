import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <main className="font-spaceGrotesk flex bg-[#F4F6FA]  max-w-screen-2xl mx-auto">
      <div className="w-60 h-screen bg-red-100"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Path doesn't exist</p>} />
      </Routes>
    </main>
  );
}

export default App;
