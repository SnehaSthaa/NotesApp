import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotesList from "./components/NotesList.tsx";
import CreateNote from "./components/CreateNote.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App acts as layout
    children: [
      { path: "/", element: <NotesList /> },
      { path: "/create-notes", element: <CreateNote /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
