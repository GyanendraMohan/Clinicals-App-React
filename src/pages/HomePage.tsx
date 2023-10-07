import React from 'react'
import ClinicalImg from "./../assets/clinical.jpg";

const HomePage: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            {/* Left Side: Image */}
            <div className="w-1/2 flex justify-center">
                <img
                    src={ClinicalImg}  // Replace with your image path
                    alt="Clinical App"
                    className="w-4/5"
                />
            </div>

            {/* Right Side: Description */}
            <div className="w-1/2 p-4">
                <h1 className="text-3xl mb-4 text-center bg-blue-500 py-2 px-6 rounded text-white font-serif tracking-widest">Clinicals</h1>
                <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus ac ligula lacinia consequat at vel dolor.
                </p>
                <button
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-900 transition duration-300 font-serif"
                    onClick={() => {
                        // Handle button click to redirect to another page
                        // You can use React Router for navigation
                    }}
                >
                    Learn More
                </button>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4 text-center font-serif">Key Features</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:bg-slate-200">
                            <div className="text-2xl mb-2 font-serif">Feature 1</div>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:bg-slate-200">
                            <div className="text-2xl mb-2 font-serif">Feature 2</div>
                            <p className="text-gray-600">
                                Nullam nec purus ac ligula lacinia consequat at vel dolor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;