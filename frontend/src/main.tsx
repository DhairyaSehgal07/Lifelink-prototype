import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.tsx";
import LoginScreenV1 from "./screens/LoginScreenV1.tsx";
import UserRegisterScreenV1 from "./screens/UserRegisterScreenV1.tsx";

// import HomeScreen from "./Screens/HomeScreen.tsx";
// import LoginScreen from "./Screens/LoginScreen.tsx";

// import FarmerRegisterScreen from "./Screens/FarmerRegisterScreen.tsx";
// import StoreAdminRegisterScreen from "./Screens/StoreAdminRegisterScreen.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route index={true} path="/login" element={<LoginScreenV1 />} />
      <Route
        index={true}
        path="/register-user"
        element={<UserRegisterScreenV1 />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
