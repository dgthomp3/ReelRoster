import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Auth from './Auth'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  )
}

export default App
