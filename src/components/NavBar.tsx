import React from 'react'
// import { Link } from 'react-router-dom'
import Hero from './../assets/hero.svg'
import { Button } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, Business as BusinessIcon, MailOutline as MailIcon } from '@mui/icons-material';

const NavBar: React.FC = () => {
    const linkStyle = {
        color: 'white', // Set the text color to white
        textDecoration: 'none', // Remove underlines from links
    };
    return (
        <header className="bg-blue-500 p-4 flex justify-between items-center border-b-2 border-gray-900 ">
            <div className="flex items-center">
                {/* Logo */}
                <img
                    src={Hero}
                    alt="Logo"
                    className=" w-14 h-14 rounded-full"
                />

                <h1 className="text-white text-lg ml-2">CLINICALS</h1>
            </div>
            <div className="space-x-4">
                {/* Links with Material-UI icons */}
                <Button color="inherit" startIcon={<HomeIcon />}>
                    <a href="#" style={linkStyle}>
                        Home
                    </a>
                </Button>
                <Button color="inherit" startIcon={<InfoIcon />}>
                    <a href="#" style={linkStyle}>
                        About
                    </a>
                </Button>
                <Button color="inherit" startIcon={<BusinessIcon />}>
                    <a href="#" style={linkStyle}>
                        Services
                    </a>
                </Button>
                <Button color="inherit" startIcon={<MailIcon />}>
                    <a href="#" style={linkStyle}>
                        Contact
                    </a>
                </Button>
            </div>
        </header>
    )
}

export default NavBar