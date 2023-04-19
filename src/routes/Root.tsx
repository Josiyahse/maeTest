import { createBrowserRouter } from "react-router-dom";
import Meetings from "../components/Meetings";
import Meet from "../components/Meet";
import ErrorPage from "../error-page";
import Home from "../components/Home";
import Faq from "../components/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/meetings",
    element: <Meetings />,
  },
  {
    path: "/meet",
    element: <Meet />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
]);

export default router;
