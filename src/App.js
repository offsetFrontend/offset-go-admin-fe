import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Retirements from "./pages/Retirements.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import TransferRequest from "./pages/TransferRequest.jsx";
import MarketPlace from "./pages/MarketPlace.jsx";
import TokenHistory from "./pages/TokenHistory.jsx";
import Transactions from "./pages/Transactions.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Inquire from "./pages/Inquire.jsx";
import Subscription from "./pages/Subscription.jsx";
import StaticPages from "./pages/StaticPages.jsx";
import Roles from "./pages/Roles.jsx";
import UserList from "./pages/UserList.jsx";
import Root from "./pages/Root.jsx";
import Projects from "./pages/Projects";
import { loader as RootPageLoader } from "./pages/Root.jsx";
import { OffSetGoDetails } from "./pages/OffSetGoDetails.jsx";

function App() {
  const { authUser } = useAuthContext();
  const router = createBrowserRouter([
    { path: "/login", element: authUser ? <Navigate to="/" /> : <Login /> },
    {
      path: "/",
      loader: RootPageLoader,
      element: authUser ? <Root /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "transactions", element: <Transactions /> },
        { path: "retirements", element: <Retirements /> },
        { path: "/transfer-requests", element: <TransferRequest /> },
        { path: "forms/contact-us", element: <ContactUs /> },
        { path: "forms/inquire", element: <Inquire /> },
        { path: "forms/subscription", element: <Subscription /> },
        { path: "marketplace-users", element: <MarketPlace /> },
        { path: "token-history", element: <TokenHistory /> },
        { path: "setting/static-pages", element: <StaticPages /> },
        { path: "setting/roles", element: <Roles /> },
        { path: "setting/users", element: <UserList /> },
        { path: "setting/offsetgo-details", element: <OffSetGoDetails/>},
        
      ],
    },
  ]);
  return (
    <main className="font-spaceGrotesk bg-[#F4F6FA] min-h-screen flex max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
      <Toaster />
    </main>
  );
}

export default App;
