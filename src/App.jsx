import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
// import Testimonail from './components/testimonial/testimonial';
import Testimonials from "./components/testimonial/testimonial";
import Contactus from "./components/contactus/contactus";
function App() {
  return (
    <>
      <Home header={["Home", "AboutUS", "Course"]} />
      <Testimonials></Testimonials>
      <Contactus />
      <Footer />
    </>
  );
}
export default App;
