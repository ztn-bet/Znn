import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #121212;
  color: white;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
