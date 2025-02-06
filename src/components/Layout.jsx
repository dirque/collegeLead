import Navbar from "./Navbar";
import  Hero from "./Herosection";
import Student  from "./StudentLife";
import Courses from "./AvailableCourses";
import Contact from "./GetIntouch";
import Footer from "./Footer";

const Layout=()=>
{
    return(
<div className="">
      <Navbar />
      <Hero />
      <Student/>
      <Courses/>
      <Contact/>
      <Footer/>
    
</div>
    );
}
export default Layout;