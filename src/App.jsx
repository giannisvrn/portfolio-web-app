import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './Homepage/Homepage'
import Projects from './Projects/Projects'

function App() {

  return (
    <Router basename="/portfolio-web-app">
      <div className='App'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
