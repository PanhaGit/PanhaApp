import { BrowserRouter, useRoutes } from "react-router-dom";
import { RouterApp } from "./router/router";

function AppRoutes() {
  const routes = useRoutes(RouterApp);
  return routes;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
