import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Retirements from "./pages/Retirements.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Inquire from "./pages/Inquire.jsx";
import Subscription from "./pages/Subscription.jsx";
import StaticPages from "./pages/StaticPages.jsx";

function App() {
  const { authUser } = useAuthContext();
  console.log(authUser);
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
        <Route path="/forms/contact-us" element={<ContactUs />} />
        <Route path="/forms/inquiry" element={<Inquire />} />
        <Route path="/forms/subscription" element={<Subscription />} />
        <Route path="setting/static-pages" element={<StaticPages />} />
        <Route path="*" element={<p>Path doesn't exist</p>} />
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
