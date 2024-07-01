import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home/Home";
import Resume from "../page/resume/Resume";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/resume", element: <Resume /> },
      { path: "/contact", element: <Contact id="Contact" /> },
    ],
  },
]);

export default router;
