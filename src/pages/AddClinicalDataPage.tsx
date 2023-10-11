import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ClinicalData, UserInfo } from '../interfaces/types';
import userImg from './../assets/clinical.jpg'

// Define types for user information and clinical data


const AddClinicalDataPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [userInfo, setUserInfo] = useState<UserInfo>({ id: 0, firstName: '', lastName: '', age: 0 });
    const [formData, setFormData] = useState<ClinicalData>({ componentName: '', componentValue: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        // Fetch user info by ID when the component mounts
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get<UserInfo>(`http://localhost:8080/clinicalservices/api/patients/${id}`);
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };

        fetchUserInfo();
    }, [id]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors: { [key: string]: string } = {};

        if (!formData.componentName.trim()) {
            errors.componentName = 'Component Name is required';
        }

        if (!formData.componentValue.trim()) {
            errors.componentValue = 'Component Value is required';
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                await axios.post('http://localhost:8080/clinicalservices/api/clinicals', { ...formData, patientId: id });
                setFormData({ componentName: '', componentValue: '' });
            } catch (error) {
                console.error('Error submitting clinical data:', error);
            }
        }
    };

    return (
        <div className="p-16 flex">
            {/* Left Side - User Information */}
            <div className="w-1/2 pr-4">
                <h1 className="text-2xl font-semibold mb-4 text-center font-serif">User Information</h1>
                <div className="flex flex-col items-center p- font-serif">
                    <div className="w-32 h-32 flex items-center justify-center">
                        <div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-blue-500 shadow-lg">
                            <img
                                src={userImg}
                                alt="User Image"
                                className="object-cover w-20 h-20 rounded-full"
                            />
                        </div>
                    </div>


                    <p className="text-lg"> <b>ID : </b> {userInfo.id}</p>
                    <p className="text-lg"><b> First Name : </b>{userInfo.firstName}</p>
                    <p className="text-lg"><b> Last Name : </b>{userInfo.lastName}</p>
                    <p className="text-lg"><b> Age : </b>{userInfo.age}</p>
                    {/* Display more user information here */}
                </div>
            </div>

            {/* Right Side - Clinical Data Form */}
            <div className="w-1/2 ">
                <h2 className="text-2xl font-semibold mb-4 font-serif">Add Clinical Data</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Component Name</label>
                        <input
                            type="text"
                            name="componentName"
                            value={formData.componentName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 ${errors.componentName ? 'border-red-500' : ''
                                }`}
                        />
                        {errors.componentName && <p className="text-red-500 text-sm mt-1">{errors.componentName}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Component Value</label>
                        <input
                            type="text"
                            name="componentValue"
                            value={formData.componentValue}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400 ${errors.componentValue ? 'border-red-500' : ''
                                }`}
                        />
                        {errors.componentValue && <p className="text-red-500 text-sm mt-1">{errors.componentValue}</p>}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-900 transition duration-300 font-serif  "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddClinicalDataPage;
