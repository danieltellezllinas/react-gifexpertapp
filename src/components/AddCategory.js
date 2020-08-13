import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2)
        {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
        //Esto evita que la página se recargue cuando presionamos enter en el formulario
    }
    //El inputvalue es el último valor actualizado de lo que escribimos en input
    return (
        <form onSubmit={handleSubmit}>
            <h2>AddCategory</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
  };