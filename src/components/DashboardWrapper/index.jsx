import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { history } from 'routes'
import './index.css'

class DashboardWrapper extends Component {
  // static propTypes = {}

  // static defaultProps = {}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <div
          className="d-flex"
        >
          <div className="sidebar bg-light">
            <li onClick={e => history.push('/dashboard')}>Home</li>
            <li onClick={e => history.push('/dashboard/settings')}>Settings</li>
          </div>

          <main
            style={{
              flex: 1
            }}
          >
            {this.props.children}
          </main>
        </div>
      </div>
    )
  }
}

export default DashboardWrapper
