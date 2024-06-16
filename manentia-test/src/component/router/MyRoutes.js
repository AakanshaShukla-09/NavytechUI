// import React from "react";
// import { Link, Router } from "react-router-dom";

// export const MyRoutes = () => {
//   return (
//     <Router>
//       <nav>
//         <li>
//           <Link to="/services">Services</Link>
//         </li>
//         <li>
//           <Link to="/portfolio">Portfolio</Link>
//         </li>
//       </nav>
//     </Router>
//   );
// };

import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "../layout/Services";
import Portfolio from "../layout/Portfolio";
import About from "../layout/About";
import Contact from "../layout/Contact";
import Dashboard from "../layout/Dashboard";
import Testimonial from "../layout/Testimonial";
import UserProfile from "../api/UserProfile";

export const MyRoutes = () => {
  // const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/talk-to-us" element={<Contact />}></Route>
      <Route path="/testimonial" element={<Testimonial />}></Route>
      <Route path="/api" element={<UserProfile />}></Route>
    </Routes>
  );
};
