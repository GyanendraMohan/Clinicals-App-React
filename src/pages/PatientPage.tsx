import React, { useEffect, useState } from "react";
import PatientInfo from "./PatientInfo";
import axios from 'axios';
import { PatientData } from "../interfaces/types";


const PatientPage: React.FC = () => {
    const [patients, setPatients] = useState<PatientData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/clinicalservices/api/patients"); // Replace with your API endpoint
                setPatients(response.data);
            } catch (error) {
                console.error("Error fetching patient data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold mt-8 font-serif text-center">Patient Information</h1>
            <div className="container mx-auto mt-8 my-4  flex flex-center">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto">
                    {patients.map((patient) => (
                        <PatientInfo key={patient.id} {...patient} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PatientPage;
