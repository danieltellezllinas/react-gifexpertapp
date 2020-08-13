import React, { useState } from 'react';
import {AddCategory} from '../components/AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One']);

    //Hay que conseguir que la función añada un nuevo elemento al array
    /*const handleAdd = () => {
        //Esto nos hace mantener las categorías anteriores y agregar una nueva
        setCategories([...categories, 'HunterXHunter']);
    }*/
    return (
      <>
        <h2>GifExpertApp</h2>
        {/*Con setcategories lo que hago es mandarle la categoría setCategories al componente*/}
        <AddCategory setCategories={setCategories}/>
        <hr/>

        <ol>
            {
                categories.map(category =>
                    <GifGrid category={category}
                    key={category}/>
                )
            }
        </ol>
      </>
    )
  }