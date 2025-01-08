import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import QuestionList from './QuestionList';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-layout">
          <div className="App-content">
            <Routes>
              <Route path="/questions" element={<QuestionList />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;