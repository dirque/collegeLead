import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import  Hero from "./components/Herosection";
import Student  from "./components/StudentLife";
import Courses from "./components/AvailableCourses";
import Contact from "./components/GetIntouch";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
function App() {
  return (
    <Router>
      <Layout/>
    </Router>
    
  );
}

export default App;
