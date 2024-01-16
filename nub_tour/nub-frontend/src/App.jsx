import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import BuyTicket from "./pages/BuyTicket/BuyTicket";
import Ticket from "./pages/Ticket/Ticket";

const router = createBrowserRouter([

  {
    path: "/",
    element:<BuyTicket />,
  },
  {
    path: "/ticket",
    element:<Ticket />,
  },
]);


function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
