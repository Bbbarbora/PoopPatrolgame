import { createRoot } from "react-dom/client";
import { GamePage } from "./pages/GamePage";
import { Entrance } from "./pages/Entrance/Entrance";
import { Rules } from "./pages/Rules/Rules";
import { GameOver } from "./pages/GameOver/GameOver";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Entrance />,
  },
  {
    path: "/gamePage",
    element: <GamePage />,
  },
  {
    path: "/rules",
    element: <Rules />,
  },
  {
    path: "/gameOver",
    element: <GameOver />,
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
