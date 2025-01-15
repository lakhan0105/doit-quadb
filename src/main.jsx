import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { Provider } from "react-redux";
import store from "./store.js";

import { AllTasks, Landing } from "./Pages/index.js";
import RootLayout from "./RootLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />}></Route>

      <Route element={<RootLayout />}>
        <Route path="/all-tasks" element={<AllTasks />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
