
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
