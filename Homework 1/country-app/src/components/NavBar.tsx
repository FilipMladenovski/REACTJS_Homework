import React from 'react';

interface NavBarProps {
    onSelectPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSelectPage }) => {
    const regions = ['Home', 'Asia', 'Europe', 'Africa', 'Americas', 'Oceania'];

    return (
        <nav>
            <ul>
                {regions.map(region => (
                    <li key={region} onClick={() => onSelectPage(region)}>
                        {region}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
