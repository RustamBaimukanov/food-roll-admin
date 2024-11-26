import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FoodList.css'; // подключи стили для аниме-эстетики

const FoodList = () => {
    const [foods, setFoods] = useState([]);
    const [filters, setFilters] = useState({ name: '', difficulty: '' });

    useEffect(() => {
        fetchFoods();
    }, [filters]);

    const fetchFoods = async () => {
        try {
            const response = await axios.get('http://localhost:8080/foods', { params: filters });
            setFoods(response.data);
        } catch (error) {
            console.error('Ошибка при получении списка еды:', error);
        }
    };

    return (
        <div className="food-list">
            <h2>Список еды</h2>
            {foods.map((food) => (
                <div key={food.id} className="food-item">
                    <h3>{food.name}</h3>
                    <p>Сложность: {food.difficulty}</p>
                </div>
            ))}
        </div>
    );
};

export default FoodList;
