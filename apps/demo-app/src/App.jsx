import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import LabelPage from './pages/LabelPage';
import InputPage from './pages/InputPage';
import CardPage from './pages/CardPage';
import ModalPage from './pages/ModalPage';
import ChartPage from './pages/ChartPage';
import TablePage from './pages/TablePage';
import CSSVariablesDemo from './pages/CSSVariablesDemo';
import DarkModeTest from './pages/DarkModeTest';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/label" element={<LabelPage />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/modal" element={<ModalPage />} />
            <Route path="/chart" element={<ChartPage />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/css-variables" element={<CSSVariablesDemo />} />
            <Route path="/dark-mode-test" element={<DarkModeTest />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
