import React, { useState } from 'react';

const AddPatientPage: React.FC = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
    });

    // State for error message
    const [errorMessage, setErrorMessage] = useState('');

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if age is negative
        if (parseInt(formData.age, 10) <= 0) {
            setErrorMessage('Age cannot be negative or zero.');
            return;
        }

        // Clear any previous error messages
        setErrorMessage('');

        // You can handle form submission logic here, e.g., sending data to a server
        console.log('Form Data:', formData);
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
        });
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 mb-8">
            <h2 className="text-2xl font-semibold font-serif text-center">Patient Information</h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="firstName" className="text-gray-600">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lastName" className="text-gray-600">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="age" className="text-gray-600">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                {errorMessage && (
                    <div className="text-red-600">{errorMessage}</div>
                )}
                <div className="flex flex-col">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none  hover:bg-gray-900 transition duration-300 font-serif"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPatientPage;
