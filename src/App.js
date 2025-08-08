import React from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
      <NavigationBar />
      <main className="flex-grow-1">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
