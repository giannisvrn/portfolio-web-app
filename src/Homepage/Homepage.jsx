import './Homepage.css';
import Navbar from '../Navbar';

import image_icon from '../icons/image.png'
import pin_icon from '../icons/pin.png'
import c_icon from '../icons/c-icon.png'
import cpp_icon from '../icons/cpp-icon.png'
import react_icon from '../icons/react-icon.png'
import python_icon from '../icons/python-icon.png'
import firebase_icon from '../icons/firebase-icon.png'


function Homepage() {
    return (
      <div className='background-container'>
      <Navbar/>
      <div className="App">
        <div className='homepage-container'>
          <div className='photo-container'>
            <img src={image_icon} alt="" className='image-icon'></img>
          </div>
          <div className='text-container'>
            <h1>Computer Science Student</h1>
            <p>Hi 👋, i'm <b>Giannis Vryonis</b> and i'm in my senior year at the National and Kapodistrian University of Athens.<br></br>
             I'm interested in cybersecurity and web development,with experience in React and Firebase.</p>
            <div className='loc'>
              <img src={pin_icon} alt="" className='pin-icon'></img>
              <p>Athens,Greece</p>
            </div>
          </div>
        </div>
        <h1 className='languages'>Languages and Frameworks</h1>
        <div className='languages-container'>
          <div className='language'>
            <img src={c_icon} alt="" className='language-icon'></img>
          </div>
          <div className='language'>
            <img src={cpp_icon} alt="" className='language-icon'></img>
          </div>
          <div className='language'>
            <img src={python_icon} alt="" className='language-icon'></img>
          </div>
          <div className='language'>
            <img src={react_icon} alt="" className='language-icon'></img>
          </div>
          <div className='language'>
            <img src={firebase_icon} alt="" className='language-icon'></img>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Homepage;
