/* global app */
import React from 'react'
import PropTypes from 'prop-types'

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Data Dog</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>

          <span className="navbar-text">
            <button className="btn btn-light" onClick={e => app.history.push('/login')}>
              Login
            </button>
          </span>
        </div>
      </nav>

      <div className="container-fluid">

      </div>
    </div>
  )
}

Home.propTypes = {}
Home.defaultProps = {}

export default Home
