import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {  createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import Login from "./components/Auth/Login.jsx";
import { AuthContext } from "./context/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Login />} />
      <Route path="admin" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="employee" element={
          <ProtectedRoute>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
