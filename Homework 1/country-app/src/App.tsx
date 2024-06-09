import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './components/Home';

const App: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState<string>('Home');

    return (
        <div className="app">
            <Header onSelectPage={setSelectedPage} />
            {selectedPage === 'Home' ? <Home /> : <Main region={selectedPage} />}
            <Footer />
        </div>
    );
};

export default App;
