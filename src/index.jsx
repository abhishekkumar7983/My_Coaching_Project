import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import '@fontsource/poppins';
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout";
import Home from "./components/Home/home";
import AboutUs from "./components/Aboutus/aboutus";
import ContactFormComponent from "./components/contactus/contactus";
import Gallery from "./components/Gallery/gallery";
import Courses from "./components/Courses/courses";
import Result from "./components/results/result";
import Freestudy from "./components/FreeStudy/freestudy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="My_Coaching_Project" element={<Home />} />
      <Route path="My_Coaching_Project/about" element={<AboutUs />} />
      <Route
        path="My_Coaching_Project/contact"
        element={<ContactFormComponent />}
      />
      <Route path="My_Coaching_Project/gallery" element={<Gallery />} />
      <Route path="My_Coaching_Project/courses" element={<Courses />} />
      <Route path="My_Coaching_Project/result" element={<Result />} />
      <Route path="My_Coaching_Project/studyfree" element={<Freestudy />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
