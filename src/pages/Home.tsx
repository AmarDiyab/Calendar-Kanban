import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to={'/calendar'}>
                <h1>Calendar</h1>
            </Link>
            <Link to={'/kanban'}>
                <h1>Kanban</h1>
            </Link>
        </div>
    )
}

export default Home