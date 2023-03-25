import React from "react";
import "./App.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Root";


function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
