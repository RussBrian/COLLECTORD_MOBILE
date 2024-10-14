import { useState } from 'react';

const useFormData = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const resetForm = () => {
        setFormData(initialState);
        setImageFile(null);
    };

    const submitForm = async (url) => {
        const data = new FormData();


        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('fireBaseCode', formData.fireBaseCode);
        data.append('longitude', formData.longitude);
        data.append('latitude', formData.latitude);

        if (imageFile) {
            data.append('images[0]', imageFile);
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: data,
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            throw error;
        }
    };

    return {
        formData,
        handleChange,
        handleFileChange,
        resetForm,
        submitForm,
    };
};

export default useFormData;
