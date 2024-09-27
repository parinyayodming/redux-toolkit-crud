import Home from "./Home";
import UserCreate from "./components/Create";
import UserUpdate from "./components/Update";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "create",
    element: <UserCreate />,
  },
  {
    path: "update/:id",
    element: <UserUpdate />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
