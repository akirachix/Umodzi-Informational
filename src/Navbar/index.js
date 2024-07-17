
import './index.css';
import React, { useState, useEffect } from 'react';
import { Squash as HamburgerIcon } from 'hamburger-react';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [homeSection, setHomeSection] = useState(null);
  const [productSection, setProductSection] = useState(null);
  const [aboutSection, setAboutSection] = useState(null);
  const [contactSection, setContactSection] = useState(null);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.links') === null && event.target.closest('.hamburger') === null) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside, { capture: true });
    } else {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: true });
    };
  }, [isOpen]);

  useEffect(() => {
    setHomeSection(document.getElementById('home')?.offsetTop);
    setProductSection(document.getElementById('product')?.offsetTop);
    setAboutSection(document.getElementById('about-section')?.offsetTop);
    setContactSection(document.getElementById('contactus')?.offsetTop);

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= homeSection && scrollPosition < productSection) {
        setActiveLink('home');
      } else if (scrollPosition >= productSection && scrollPosition < aboutSection) {
        setActiveLink('product');
      } else if (scrollPosition >= aboutSection && scrollPosition < contactSection) {
        setActiveLink('about-section');
      } else if (scrollPosition >= contactSection) {
        setActiveLink('contactus');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <img src="images/gplogo.png" alt="GanzaPay Logo" />
          <h4>GanzaPay</h4>
        </div>

        <div className="items">
          <li>
            <a
              className={activeLink === "home" ? "active" : ''}
              onClick={() => handleLinkClick("home")}
            >
              <Link activeClass="active" smooth spy to="home">
                Home
              </Link>
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'product' ? 'active' : ''}
              onClick={() => handleLinkClick('product')}
            >
              <Link activeClass="active" smooth spy to="product">
                Product
              </Link>
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'about-section' ? 'active' : ''}
              onClick={() => handleLinkClick('about-section')}
            >
              <Link activeClass="active" smooth spy to="about-section">
                About us
              </Link>
            </a>
          </li>
          <li>
            <a
              className={activeLink === 'contactus' ? 'active' : ''}
              onClick={() => handleLinkClick('contactus')}
            >
              <Link activeClass="active" smooth spy to="contactus">
                Contact Us
              </Link>
            </a>
          </li>
        </div>
      </div>

      <div className="hamburger">
        <HamburgerIcon toggled={isOpen} size={20} toggle={handleHamburgerClick} />
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="links"
          >
            <div className="back-button" onClick={handleCloseClick}>
              <IoMdClose size={30} />
            </div>
            <li>
              <a onClick={() => handleLinkClick('home')}>
                <Link activeClass="active" smooth spy to="home">
                  Home
                </Link>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick('product')}>
                <Link activeClass="active" smooth spy to="product">
                  Product
                </Link>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick('about-section')}>
                <Link activeClass="active" smooth spy to="about-section">
                  About us
                </Link>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick('contactus')}>
                <Link activeClass="active" smooth spy to="contactus">
                  Contact Us
                </Link>
              </a>
            </li>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

