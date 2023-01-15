import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// styles
import './Navbar.css'

export default function Navbar() {
    const { loginWithRedirect, isAuthenticated, user,  isLoading, error, logout } = useAuth0();

    const [stickyClass, setStickyClass] = useState("");

    function handleStick() {
      let windowHeight = window.scrollY;
      windowHeight > 72 ? setStickyClass("sticky") : setStickyClass("");
    }

    useEffect(() => {
      window.addEventListener("scroll", handleStick);
    }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${stickyClass}`}>
      <div className="container px-4">
        <Link to="/" className="navbar-brand">
          <h2>Start Bootstrap</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/articles-page" className="nav-link active">Articles</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">Contact</Link>
            </li>
            {/* signin button */}
            {!isAuthenticated  &&
              <>
                <li><hr className="nav-divider nav-item  dashboard-item" /></li>
                <li className="nav-item dashboard-item">
                  <a className="nav-link active sign-in" onClick={() => loginWithRedirect()} >Sign in</a>
                </li>
              </>
            }
            {/* dashboard buttons and sign-out button  */}
            {isAuthenticated  &&
              <>
                <li><hr className="nav-divider nav-item  dashboard-item" /></li>
                <li className="nav-item  dashboard-item">
                  <Link to="/new-article" className="nav-link active">New Article</Link>
                </li>
                <li className="nav-item  dashboard-item">
                    <Link to="/manage-articles" className="nav-link active">Manage Articles</Link>
                </li>
                <li><hr className="nav-divider nav-item  dashboard-item" /></li>
                <div className="nav-item dashboard-item">
                  <img src={user.picture} alt="avatar-dashboard"  className="avatar-dashboard"/>
                  <span className="welcome-dashboard"> Singed in as <span className="nickname">{user.nickname}</span></span>
                </div>
                <li><hr className="nav-divider nav-item  dashboard-item" /></li>
                <li className="nav-item dashboard-item">
                  <a className="nav-link active sign-out" onClick={() => logout({ returnTo: window.location.origin })} >Sign Out</a>
                </li>
              </>
            } 
          </ul>   
        </div>
        {/* sign-in icon in dropdown-menu before auth */}
        {!isAuthenticated &&
          <button className="btn sign-in-icon" onClick={() => loginWithRedirect()} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-user fa-fw"></i>
          </button>  
        }
        {/* dashboard buttons in dropdown-menu after auth */}
        {isAuthenticated && 
          <div className="dropdown dashboard">
          <button className="btn btn-secondary-custom dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.picture} alt="avatar"  className="avatar"/>
          </button>
          <ul className="dropdown-menu">
            <p className="dropdown-item welcome"> Welcome <span>{user.nickname}</span></p>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <Link to="/new-article" className="dropdown-item">New Article</Link>
            </li>
            <li>
              <Link to="/manage-articles" className="dropdown-item">Manage Articles</Link>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item signout" onClick={() => logout({ returnTo: window.location.origin })} >Sign Out</button></li>
          </ul>
        </div>
        }
        
      </div>
    </nav>
  )
}