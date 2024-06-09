import React from 'react';
import NavBar from './NavBar';

interface HeaderProps {
    onSelectPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSelectPage }) => {
    return (
        <header>
            <h1>Trip Planner</h1>
            <NavBar onSelectPage={onSelectPage} />
        </header>
    );
};

export default Header;
