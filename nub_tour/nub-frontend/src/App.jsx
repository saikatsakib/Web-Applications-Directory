import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from "./pages/Home/Home";
import ReservationForm from "./pages/ReservationForm/ReservationForm";
import BuyTicket from "./pages/BuyTicket/BuyTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reserve",
    element:<ReservationForm />,
  },
  {
    path: "/buy_ticket",
    element:<BuyTicket />,
  },
]);


function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
