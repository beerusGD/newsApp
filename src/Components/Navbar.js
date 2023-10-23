import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">
              News Application
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
	    <li className="nav-item"><Link className="nav-link text-light" to="/">General</Link></li>
	    <li className="nav-item"><Link className="nav-link text-light" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
