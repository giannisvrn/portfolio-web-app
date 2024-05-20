import './Projects.css'
import Navbar from '../Navbar'

function Projects() { 
    return ( 
        <div className='background-container'>
            <Navbar/>
            <div className='Projects-container'>
                <div className='blocks-container'>
                    <div className='web-dev-container'>
                        <p>Web Development</p>
                        <ul>
                            <li><a href="https://github.com/giannisvrn/mystudies-remake">Mystudies Web-App</a></li>
                            <li><a href="https://github.com/giannisvrn/todo-web-app">Todo List Web-App</a></li>
                            <li><a href="https://github.com/giannisvrn/calculator-web-app">Calculator Web-App</a></li>
                            <li><a href="https://github.com/giannisvrn/weather-web-app">Weather Web-App</a></li>
                        </ul>
                    </div>
                    <div className='cybersecurity-container'>
                        <p>Cyber Security</p>
                        <ul>
                            <li><a href="https://github.com/giannisvrn/iwconfig-exploit">iwconfig exploit</a></li>
                            <li><a href="https://github.com/giannisvrn/format-string-attack">Format string attack</a></li>
                        </ul>
                        <a>**Undergoing class, can't upload on github yet🫣**</a>
                    </div>
                    <div className='other-container'>
                        <p>Other</p>
                        <ul>
                            <li><a href="https://github.com/giannisvrn/Messaging-App-using-threads">Messaging-App-using-threads</a></li>
                            <li><a href="https://github.com/giannisvrn/priority-scheduling-xv6">Priority scheduling in xv6</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Projects