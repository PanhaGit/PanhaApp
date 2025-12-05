import { BrowserRouter, useRoutes } from "react-router-dom";
import { RouterApp } from "./router/router";
import { Toaster } from "react-hot-toast";

function AppRoutes() {
  const routes = useRoutes(RouterApp);
  return routes;
}

export default function App() {
  return (
    <>
      <Toaster position="top-center" />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
