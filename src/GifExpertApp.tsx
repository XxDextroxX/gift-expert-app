import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece']);
  const onNewCategory = (value: string) => {
    if (categories.includes(value)) {
      return;
    }
    setCategories([value,...categories,]);
  }
  const onDeleteCategory = (index: number) => {
    const newCategories = [...categories];
    newCategories.splice(index,1);
    setCategories(newCategories);
  }
  return (
    <>  
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={onNewCategory} />
        {
          categories.map((category,index) => (
            <GifGrid key={category} category={category} index={index} onDeleteCategory={onDeleteCategory}/>
          ))
        }
    
    </>
  )
}
