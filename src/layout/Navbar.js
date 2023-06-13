import React from 'react'


function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button 
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label='Toggle navigation'
                >
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
</div>
  )
}

export default Navbar