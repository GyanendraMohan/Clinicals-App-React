import React from "react";
import PatientInfo from "./PatientInfo";

const PatientPage: React.FC = () => {
    const patients = [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            age: 35,
            imageUrl: "https://via.placeholder.com/150", // Replace with actual image URLs
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            age: 42,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            firstName: "Michael",
            lastName: "Johnson",
            age: 28,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            firstName: "John",
            lastName: "Doe",
            age: 35,
            imageUrl: "https://via.placeholder.com/150", // Replace with actual image URLs
        },
        {
            id: 5,
            firstName: "Jane",
            lastName: "Smith",
            age: 42,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            firstName: "Michael",
            lastName: "Johnson",
            age: 28,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 7,
            firstName: "John",
            lastName: "Doe",
            age: 35,
            imageUrl: "https://via.placeholder.com/150", // Replace with actual image URLs
        },
        {
            id: 8,
            firstName: "Jane",
            lastName: "Smith",
            age: 42,
            imageUrl: "https://via.placeholder.com/150",
        },
        {
            id: 9,
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
