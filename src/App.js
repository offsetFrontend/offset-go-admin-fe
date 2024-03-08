import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Retirements from "./pages/Retirements.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import Roles from "./pages/Roles.jsx";
import UserList from "./pages/UserList.jsx";

function App() {
  const { authUser } = useAuthContext();
  return (
    <main className="font-spaceGrotesk bg-[#F4F6FA] min-h-screen flex max-w-screen-2xl mx-auto">
      <Routes>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/retirements" element={<Retirements />} />
        <Route path="setting/roles" element={<Roles />} />
        <Route path="setting/users-list" element={<UserList />} />
        <Route path="*" element={<p>Path doesn't exist</p>} />
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
