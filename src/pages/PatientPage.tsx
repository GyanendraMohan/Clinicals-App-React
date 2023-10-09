import React from "react";
import PatientInfo from "./PatientInfo";

const PatientPage: React.FC = () => {
    const patients = [
        {
            firstName: "John",
            lastName: "Doe",
            age: 35,
            imageUrl: "https://via.placeholder.com/150", // Replace with actual image URLs
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            age: 42,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            firstName: "Michael",
            lastName: "Johnson",
            age: 28,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            firstName: "John",
            lastName: "Doe",
            age: 35,
            imageUrl: "https://via.placeholder.com/150", // Replace with actual image URLs
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            age: 42,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            firstName: "Michael",
            lastName: "Johnson",
            age: 28,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            firstName: "John",
            lastName: "Doe",
            age: 35,
            imageUrl: "https://via.placeholder.com/150", // Replace with actual image URLs
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            age: 42,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            firstName: "Michael",
            lastName: "Johnson",
            age: 28,
            imageUrl: "https://via.placeholder.com/150",
        },
    ];

    return (
        <>
            <h1 className="text-3xl font-bold mt-8 font-serif text-center">Patient Information</h1>
            <div className="container mx-auto mt-8 my-4  flex flex-center">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto">
                    {patients.map((patient, index) => (
                        <PatientInfo key={index} {...patient} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PatientPage;
