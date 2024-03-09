import "./App.css";

import AboutUs from "./components/Aboutus/aboutus";
import Courses from "./components/Courses/courses";
import Gallery from "./components/Gallery/gallery";
import { Route, Routes } from "react-router";
import Freestudy from "./components/FreeStudy/freestudy";
import Result from "./components/results/result";
import ContactFormComponent from "./components/contactus/contactus";
import Layout from "./layout";
import Home from "./components/Home/home";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactFormComponent />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <Courses />
            </Layout>
          }
        />
        <Route
          path="/result"
          element={
            <Layout>
              <Result />
            </Layout>
          }
        />
        <Route
          path="/studyfree"
          element={
            <Layout>
              <Freestudy />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}
export default App;
