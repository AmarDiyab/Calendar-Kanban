import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/kanban' element={<Kanban />} />
      </Routes>
    </Router>
  )
}

export default App
