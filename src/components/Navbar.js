import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";


// styles
import './Navbar.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


export default function Navbar() {

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
              <Link to="/sample-post" className="nav-link active">Sample Post</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">Contact</Link>
            </li>
          </ul>   
        </div>
      </div>
    </nav>
  )
}