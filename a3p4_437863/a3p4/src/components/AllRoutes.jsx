import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import Login from "../pages/Login";
import UserDetails from "../pages/UserDetails";
import courses from "../pages/courses"; // Importing Courses component
import Learn from "../pages/Learn"; // Importing Learn component
import Fees from "../pages/Fees"; // Importing Fees component

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/:user_id" element={<UserDetails />} />
      <Route path="/courses" element={<courses />} /> {/* Route for Courses page */}
      <Route path="/learn" element={<Learn />} /> {/* Route for Learn page */}
      <Route path="/fees" element={<Fees />} /> {/* Route for Fees page */}
    </Routes>
  );
}
