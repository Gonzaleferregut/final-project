import React, { Component } from 'react'
import LoginTabs from '../components/logintabs'
import Quote from '../components/quote-generator'
import Footer from '../components/footer'
import { withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import '../styles/loginhome.css'

class LoggedIn extends Component {

  _logout = () => {
    // remove token from local storage and use history to push default route
    localStorage.removeItem('graphcoolToken')
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="img_title">
            <img className="logo" src="https://www.gravatar.com/userimage/126022818/c60c2cc94305c1a7ad6c8d8d77de3f1d?size=120" alt="Stacked Books" />
            <h1>Elementary Tutor</h1>
            <div className="logout-btn-container">
              <FlatButton label="Logout"
              type="submit"
              className="logout-btn"
              onClick={this._logout} />
            </div>
          </div>
        </header>
        <LoginTabs />
        <Quote />
        <Footer />
      </div>
    )
  }
}

export default (withRouter(LoggedIn))
