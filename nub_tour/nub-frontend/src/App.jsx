import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import BuyTicket from "./pages/BuyTicket/BuyTicket";

const router = createBrowserRouter([

  {
    path: "/",
    element:<BuyTicket />,
  },
]);


function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
