import React from 'react';

export default () => {
   return ( 

    <nav>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Inbar Shucker</a>
            <ul className="right hide-on-med-and-down">
                {/* <li><a href="/" className="nav-item">About</a></li> */}
                <li><a href="/projects" className="nav-item">Projects</a></li>
            </ul>
        </div>
  </nav>
    // <nav className="navwrapper">
    //    <a className="logo" href="#">Inbar Shucker</a>
    // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    // </button>
    // <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <div className="navbar-nav section table-of-contents">
    //     <a className="nav-item nav-link" href="#about">About </a>
    //     <a className="nav-item nav-link" href="#contact">Contact</a>
    //     </div>
    // </div>
    // </nav>
   )
}