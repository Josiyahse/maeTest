import { createBrowserRouter } from "react-router-dom";
import Meetings from "../components/Meetings";
import Meet from "../components/Meet";
import ErrorPage from "../error-page";
import Home from "../components/Home";
import Faq from "../components/Faq";
import CGU from "../components/cgu_cgv/CGU";
import CGV from "../components/cgu_cgv/CGV";
import OrganisationCarbon from "../components/carbon/OrganisationCarbon";
import OrganisationCarbonDetails from "../components/carbon/OrganisationCarbonDetails";
import BlogPage from "../components/blog/BlogPage";
import ReadBlog from "../components/blog/ReadBlog";

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
  {
    path: "/cgu",
    element: <CGU />,
  },
  {
    path: "/cgv",
    element: <CGV />,
  },
  {
    path: "/carbon",
    element: <OrganisationCarbon />,
  },
  {
    path: "/carbon_details",
    element: <OrganisationCarbonDetails />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/read_blog",
    element: <ReadBlog />,
  },
]);

export default router;
