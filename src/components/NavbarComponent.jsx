// import { useState, useEffect } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { navLinks } from "../data/index";
// import { NavLink } from "react-router-dom";

// const NavbarComponent = () => {
//   const [changeColor, setChangeColor] = useState(false);
//   const changeBackgroundColor = () => {
//     if (window.scrollY > 10) {
//       setChangeColor(true);
//     } else {
//       setChangeColor(false);
//     }
//   };

//   useEffect(() => {
//     changeBackgroundColor();
//     window.addEventListener("scroll", changeBackgroundColor);
//   });

//   return (
//     <div>
//       <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               src="../public/klons4-2.png"
//               className="navbar-logo d-inline-block align-top"
//               alt="React Bootstrap logo"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mx-auto">
//               {navLinks.map((link) => {
//                 return (
//                   <div className="nav-link" key={link.id}>
//                     <NavLink
//                       to={link.path}
//                       className={({ isActive, isPending }) =>
//                         isPending ? "pending" : isActive ? "active" : ""
//                       }
//                     >
//                       {link.text}
//                     </NavLink>
//                   </div>
//                 );
//               })}
//             </Nav>
//             <div>
//               <button className="btn-join">Join With Us</button>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default NavbarComponent;

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [showSearch, setShowSearch] = useState(false); // State untuk menampilkan form search

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (
    <div>
      <Navbar
        expand="lg"
        className={`${changeColor ? "color-active" : ""} ${
          isMenuOpen ? "bg-active" : ""
        }`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="../public/klons4-2.png"
              className="navbar-logo d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            {/* <div>
              <button className="btn-join">Join With Us</button>
            </div> */}
            {/* Search Form */}
            {/* <Form className="d-flex" onSubmit={handleSearchSubmit}>
              {showSearch && (
                <FormControl
                  type="search"
                  placeholder="Search products..."
                  className="custom-search-input me-2"
                  aria-label="Search"
                  value={searchQuery} // Value dari state searchQuery
                  onChange={handleSearchInputChange} // Handle perubahan input
                  style={{ width: "200px" }} // Atur lebar form di sini
                />
              )}
              <Button
                className="custom-search-button"
                onClick={() => setShowSearch(!showSearch)} // Toggle search form
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
