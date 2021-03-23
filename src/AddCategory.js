import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleChangeInput = (e) =>{
        setInputValue(e.target.value);
    }

    const submitForm = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={ handleChangeInput }
                />
            </form>
        </>
    )
}
