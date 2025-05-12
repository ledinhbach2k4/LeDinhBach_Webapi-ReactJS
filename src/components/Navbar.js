import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img 
              src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" 
              alt="Your Company Logo" 
              className="logo-img"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/150x50')}
            />
          </Link>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            🏠 Trang chủ
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            ℹ️ Giới thiệu
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;