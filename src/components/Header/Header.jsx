import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { Container, Row } from "reactstrap";
const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const stckyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stckyHeaderFunc();
    return () => window.removeEventListener("scroll", stckyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrap">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
                {/* <p>Since 1995</p> */}
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-icons">
              <span className="fav_icon">
                <i class="ri-hearts-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart_icon">
                <span className="badge">1</span>
                <i class="ri-shopping-cart-line"></i>
              </span>
              <span className="image">
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
