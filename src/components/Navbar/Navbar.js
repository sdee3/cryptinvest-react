import React from 'react';

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <i className="fab fa-react fa-2x" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Homepage<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#registerModal"
              >
                Register
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#loginModal"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
