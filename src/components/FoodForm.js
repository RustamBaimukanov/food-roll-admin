import React, { useState } from 'react';
import axios from 'axios';

const FoodForm = ({ onSubmit, foodData }) => {
    const [formData, setFormData] = useState(foodData || { name: '', difficulty: '', image: null });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData();
            form.append('name', formData.name);
            form.append('difficulty', formData.difficulty);
            form.append('image', formData.image);

            await onSubmit(form);
            alert('Еда успешно сохранена!');
        } catch (error) {
            console.error('Ошибка при сохранении еды:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Название:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Сложность:</label>
            <select name="difficulty" value={formData.difficulty} onChange={handleChange} required>
                <option value="">Выберите сложность</option>
                <option value="EASY">Легко</option>
                <option value="NORMAL">Средне</option>
                <option value="HARD">Сложно</option>
            </select>

            <label>Изображение:</label>
            <input type="file" name="image" onChange={handleChange} />

            <button type="submit">Сохранить</button>
        </form>
    );
};

export default FoodForm;
