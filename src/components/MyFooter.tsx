import React from "react";

const MyFooter: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white p-6 w-full border-t-8 border-blue-900 ">
            <div className="container mx-auto mt-8">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-semibold font-serif">Clinicals</h2>
                        <p className="text-sm">Provide centralised patient information</p>
                    </div>
                    <div>
                        <p className="text-sm">© {new Date().getFullYear()} Clinicals</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-xs">
                        Address: 1234 Medical Street, Varanasi, India
                    </p>
                    <p className="text-xs">Phone: +91 7081526590</p>
                    <p className="text-xs">Email: info@clinicalapp.com</p>
                </div>
            </div>
        </footer>

    );
};

export default MyFooter;
