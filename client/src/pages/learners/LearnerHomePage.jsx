import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import { getCourseCategoriesAPI } from '../../features/courses/CoursesAPI';
import CoursesByCategory from './CoursesByCategories';

const LearnerHomepage = () => {
 const [categories, setCategories] = useState([]);
 const [selectedCategories, setSelectedCategories] = useState([]); // New state for selected categories

 useEffect(() => {
    // Fetch categories when component mounts
    fetchCategories();
 }, []);

 const fetchCategories = async () => {
    try {
      const categories = await getCourseCategoriesAPI();
      console.log('Categories: ', categories);
      setCategories(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
 };

 const handleCategoryChange = (event) => {
    const { id, checked } = event.target;
    setSelectedCategories(prevSelectedCategories => {
      if (checked) {
        // Add the category ID to the selected categories if it's checked
        return [...prevSelectedCategories, id];
      } else {
        // Remove the category ID from the selected categories if it's unchecked
        return prevSelectedCategories.filter(categoryId => categoryId !== id);
      }
    });
 };

 return (
    <div className="learner-homepage">
      <div className="content">
        <h1>Welcome to LibAcademy, Learner!</h1>
        <p>Explore our featured and recommended courses below:</p>

        {/* Categories checkboxes */}
        <div className="categories-checkboxes">
          {categories.map(category => (
            <div key={category._id}>
              <input
                type="checkbox"
                id={category._id}
                name={category._id}
                checked={selectedCategories.includes(category._id)}
                onChange={handleCategoryChange}
              />
              <label htmlFor={category._id}>{category.name}</label>
            </div>
          ))}
        </div>
        {/* Pass selected categories to CoursesByCategory */}
        <CoursesByCategory categories={selectedCategories} />
      </div>
    </div>
 );
};

export default LearnerHomepage;
