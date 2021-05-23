import React from 'react'
import { Link } from 'react-router-dom';

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = ({}) => {
        return (
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/timeline">Timeline</Link>
                    </li>
                    <li>
                    <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        );
}