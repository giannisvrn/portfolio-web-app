import './Homepage.css';
import Navbar from '../Navbar';

import image_icon from '../icons/image.png'
import pin_icon from '../icons/pin.png'

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
      </div>
      </div>
    );
}

export default Homepage;
