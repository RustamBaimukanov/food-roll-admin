import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodList from './components/FoodList';
import FoodForm from './components/FoodForm';
import axios from "axios";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<FoodList />} />
          <Route path="/create" element={<FoodForm onSubmit={createFood} />} />
        </Routes>
      </Router>
  );
}

const createFood = async (formData) => {
  await axios.post('http://localhost:8080/foods', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default App;
