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
      {
        path: "*",
        element: (
          <div className="flex justify-center items-center m-auto">
            <img
              src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-download-in-lottie-json-gif-static-svg-file-formats--not-found-web-the-ultimate-pack-design-development-animations-3299960.gif"
              alt=""
            />
          </div>
        ),
      },
    ],
  },
]);

export default router;
