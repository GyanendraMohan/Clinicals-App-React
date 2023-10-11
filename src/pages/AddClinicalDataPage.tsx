import React from 'react'
import { useParams } from 'react-router-dom';

const AddClinicalDataPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    return (
        <div>AddClinicalDataPage</div>
    )
}

export default AddClinicalDataPage