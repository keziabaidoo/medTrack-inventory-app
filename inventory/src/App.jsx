// import './App.css'
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {} from "react-router-dom";
import React from "react";
// import Nav from "./components/Nav";
// import SideNav from "./components/SideNav";
import "./Style.css";
import Dashboard from "./components/Dashboard";
import Settings from "./page/Settings";
import Report from "./page/Report";
import Notfound from "./page/Notfound";
import Pharmacy from "./page/Pharmacy";
import Laboratory from "./page/Laboratory";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
      <Route path="/pharmacy" element={<Pharmacy />}></Route>
      <Route path="/reports" element={<Report />}></Route>
      <Route path="/laboratory" element={<Laboratory />}></Route>
      <Route path="/settings" element={<Settings />}></Route>

      <Route path="*" element={<Notfound />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
