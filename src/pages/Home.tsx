import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to={'/calendar'} className="p-5 text-green-400">
                <h1>Calendar</h1>
            </Link>
            <Link to={'/kanban'} className="p-5 text-green-400">
                <h1>Kanban</h1>
            </Link>
        </div>
    )
}

export default Home