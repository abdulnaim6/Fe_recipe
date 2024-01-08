// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import "./style.css";

// const MyNavbar = () => {
//   return (
//     <Navbar expand="lg" bg="transparent" className="d-flex my-5">
//       <div className="container-fluid">
//         <div
//           className="bgc"
//           style={{
//             backgroundColor: "yellow",
//             width: "25%",
//             height: "150vh",
//             position: "absolute",
//             right: 0,
//             zIndex: -1,
//           }}
//         ></div>
//         <div className="container d-flex flex-row ml-">
//           <Navbar.Toggle
//             className="navbar-toggler bg-secondary"
//             aria-controls="navbarNavAltMarkup"
//           />
//           <Navbar.Collapse id="navbarNavAltMarkup">
//             <Nav className="navbar-nav">
//               <Nav.Link href="homepage.html">Home</Nav.Link>
//               <Nav.Link href="addRecipe.html">Add recipes</Nav.Link>
//               <Nav.Link href="profile.html">Profile</Nav.Link>
//             </Nav>
//             <div className="login">
//               <Nav.Link href="index.html">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="52"
//                   height="52"
//                   viewBox="0 0 52 52"
//                   fill="none"
//                 >
//                   {/* SVG content */}
//                 </svg>
//                 <span style={{ marginLeft: "0.5em" }}>login</span>
//               </Nav.Link>
//             </div>
//           </Navbar.Collapse>
//         </div>
//       </div>
//     </Navbar>
//   );
// };

// export default MyNavbar;
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="d-flex my-5">
      <div className="container-fluid">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="mr-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/addrecipe" className="mr-2">
              Add recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="mr-2">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;
