import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <button className='questionsButton'> <Link to="/questions">Questions</Link></button>


        </div>
    );
};

export default Home;