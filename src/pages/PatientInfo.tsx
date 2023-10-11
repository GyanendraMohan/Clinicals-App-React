// src/components/PatientInfo.tsx
import React from 'react';

import Clinical from "./../assets/clinical.jpg"
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
import HealthAndSafetySharpIcon from '@mui/icons-material/HealthAndSafetySharp';
import { useNavigate } from 'react-router-dom';

interface PatientInfoProps {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    imageUrl: string;
}

const PatientInfo: React.FC<PatientInfoProps> = ({ id, firstName, lastName, age }) => {
    const navigate = useNavigate();
    return (
        <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg flex justify-center border hover:border-blue-500 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="w-1/3 flex justify-center">
                <img src={Clinical} alt={`${firstName} ${lastName}`} className="w-full h-auto" />
            </div>
            <div className="w-2/3 p-4">
                <p>
                    <strong>First Name:</strong> {firstName}
                </p>
                <p>
                    <strong>Last Name:</strong> {lastName}
                </p>
                <p>
                    <strong>Age:</strong> {age}
                </p>
            </div>
            <div className="flex flex-col justify-evenly px-2">
                <button>
                    <HealthAndSafetySharpIcon onClick={() => navigate(`/patient/${id}`)} />
                </button>
                <button><RemoveRedEyeSharpIcon /></button>
            </div>
        </div>
    );
};

export default PatientInfo;
