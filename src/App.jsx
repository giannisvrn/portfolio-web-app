import './App.css';

import email_icon from './icons/email.png'
import github_icon from './icons/github.png'
import linkedin_icon from './icons/linkedin.png'
import weather_icon from './icons/weather-example.jpeg'
import calculator_icon from './icons/calculator-example.jpeg'
import todo_icon from './icons/todo-example.jpeg'
import image_icon from './icons/image.png'
import pin_icon from './icons/pin.png'

function App() {
    return (
      <div className="App">
        <div className='container'>
          <div className='photo-container'>
            <img src={image_icon} alt="" className='image-icon'></img>
          </div>
          <div className='text-container'>
            <h1>Computer Science Student</h1>
            <p>Hello, i'm Giannis Vryonis. I'm interested in web development and cybersecurity,with experience in React and Firebase.</p>
            <div className='loc'>
              <img src={pin_icon} alt="" className='pin-icon'></img>
              <p>Athens,Greece</p>
            </div>
          </div>
          <div className='contact-container'>
            <div className='contact'>
              <p>CONTACT ME</p>
            </div>
            <div className='link-icons'>
            <a href="mailto:giannisvrn@gmail.com">
              <img src={email_icon} alt="" className='email-icon' />
            </a>
              <a href="https://github.com/giannisvrn">
                <img src={github_icon} alt="" className='email-icon' />
              </a>
              <a href="https://www.linkedin.com/in/giannis-vrionis-3b3505208/">
                <img src={linkedin_icon} alt="" className='email-icon' />
              </a>
            </div>
          </div>

        </div>
        <h1 className='pro'>Projects</h1>
        <div className='projects-container'>
          <div className='project'>
            <a href='https://github.com/giannisvrn/todo-web-app'>
              <img src={todo_icon} alt="" className='project-icon'></img>
            </a>
            <p>Todo List Web-App</p>
          </div>
          <div className='project'>
            <a href='https://github.com/giannisvrn/calculator-web-app'>
              <img src={calculator_icon} alt="" className='project-icon'></img>
            </a>
            <p>Calculator Web-App</p>
          </div>
          <div className='project'>
            <a href='https://github.com/giannisvrn/weather-web-app'>
              <img src={weather_icon} alt="" className='project-icon'></img>
            </a>
            <p>Weather Web-App</p>
          </div>
        </div>
      </div>
    );
}

export default App;
