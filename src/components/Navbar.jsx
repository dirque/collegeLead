import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  

  return (
    <nav className="">
      
      <div className="">
        CollegeConnect
      </div>
      <ul>
        <li>
            <Link to ="/">Programs</Link>
        </li>
        <li>
            <Link to ="/">Date&Fees</Link>
        </li>
        <li>
            <Link to ="/">Admissions</Link>
        </li>
        <li>
            <Link to ="/">ContactUs</Link>
        </li>
      </ul>
</nav>
  );
  }
export default Navbar;
