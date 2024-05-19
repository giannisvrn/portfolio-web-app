import email_icon from './icons/email.png'
import github_icon from './icons/github.png'
import linkedin_icon from './icons/linkedin.png'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

function Navbar() { 
    return ( 
        <div className='navbar-container'>
            <div className='contact-container'>
                <div className='contact'>
                    <Link to='/' className={`nav-link ${location.pathname === '/portfolio-web-app' ? 'active' : ''}`}>
                        <p>Home</p>
                    </Link>
                    <Link to='/projects' className={`nav-link ${location.pathname === '/portfolio-web-app/projects' ? 'active' : ''}`}>
                        <p>Projects</p>
                    </Link>
                    <div className='link-icons'>
                        <a href="mailto:giannisvrn@gmail.com">
                            <img src={email_icon} alt="" className='email-icon' />
                        </a>
                        <a href="https://github.com/giannisvrn">
                            <img src={github_icon} alt="" className='linkedin-icon' />
                        </a>
                        <a href="https://www.linkedin.com/in/giannis-vrionis-3b3505208/">
                            <img src={linkedin_icon} alt="" className='linkedin-icon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;