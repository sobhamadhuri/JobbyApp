import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <ul className="header-ul-container">
        <li className="logo-container">
          <Link className="link" to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="logo"
              alt="website logo"
            />
          </Link>
        </li>
        <li className="home-jobs-container">
          <Link className="link" to="/">
            <ImHome className="home-icon" />
            <h1 className="text">Home</h1>
          </Link>
          <Link className="link" to="/jobs">
            <h1 className="text">Jobs</h1>
            <button type="button" className="jobs-btn">
              Jobs
            </button>
          </Link>
        </li>
        <li>
          <FiLogOut className="home-icon" onClick={onClickLogout} />
          <button type="button" className="btn-logout" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
