import React from 'react'
// import { Link } from 'react-router-dom'
import Hero from './../assets/hero.svg'
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';


const NavBar: React.FC = () => {
    const linkStyle = {
        color: 'white', // Set the text color to white
        textDecoration: 'none', // Remove underlines from links

    };
    return (
        <header className="bg-blue-500 p-4 flex justify-between items-center border-b-2 border-gray-900" >
            <Link to="/" className="flex items-center">
                {/* Logo */}
                <img
                    src={Hero}
                    alt="Logo"
                    className="w-14 h-14 rounded-full"

                />
                <h1 className="text-white  ml-2 font-serif text-2xl font-bold tracking-widest cursor-pointer">CLINICALS</h1>
            </Link>
            <div className="space-x-4">
                {/* Links with Material-UI icons */}
                <Button color="inherit" startIcon={<AddCircleIcon />}>
                    <a href="/addPatient" style={linkStyle} className="font-serif">
                        Add Patient
                    </a>
                </Button>
            </div>
        </header>
    )
}

export default NavBar