/* eslint-disable no-unused-vars */
import { createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import Homes from "./pages/index";
import Actividades from "./pages/actividades";
import Retos from "./pages/retos";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homes />,
    },
    {
      path: '/actividades',
      element: <Actividades />,
    },
    {
      path:'/retos',
      element:<Retos/>
    }
  ])

  return <RouterProvider router={router} />;
}

export default App;