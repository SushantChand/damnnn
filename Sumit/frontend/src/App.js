import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import UserList from './components/UserList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserList" element={<UserList />} /> {/* Adjust the path as per your requirement */}
      </Routes>
    </Router>
  );
}

export default App;
