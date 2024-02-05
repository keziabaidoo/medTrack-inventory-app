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
import Home from "./page/Home";
import Inventory from "./page/Inventory";
import Users from "./page/Users";
import Settings from "./page/Settings";
import Report from "./page/Report";
import Departments from "./page/Departments";
import Notfound from "./page/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Home />}></Route>
      <Route path="/report" element={<Report />}></Route>

      <Route path="/inventory" element={<Inventory />}>
        <Route
          index
          // path="laboratory"
          element={
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ad odio veritatis obcaecati iusto modi deleniti, molestiae
              voluptates nihil vero optio fugit quibusdam beatae commodi
              reiciendis perferendis dolores cupiditate rem.
            </div>
          }
        ></Route>
        <Route
          path="pharmacy"
          element={
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore neque sint laborum excepturi, deserunt aut veniam
              consequatur sit ullam voluptate maxime, natus sequi quam eveniet
              esse reiciendis commodi, beatae enim?
            </div>
          }
        ></Route>
      </Route>

      <Route path="/departments" element={<Departments />}>
        {/* <Route index loader={fetchTeamData} element={<Team />} /> */}

        {/* <Route path="teamId" element={<TeamMember />} /> */}
      </Route>
      <Route path="/users" element={<Users />}></Route>
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
