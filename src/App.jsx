// src/App.js
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Entries from './pages/Entries';
import NewEntry from './pages/NewEntry';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'entries':
        return <Entries setCurrentPage={setCurrentPage} />;
      case 'new-entry':
        return <NewEntry setCurrentPage={setCurrentPage} />;
      default:
        return <div>Page not found</div>;
    }
  };
  
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
          {renderPage()}
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
}