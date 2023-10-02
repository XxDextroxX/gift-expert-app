import { useState } from "react";


type AddCategoryProps = {
    onNewCategory: (value: string) => void
}

export const AddCategory = ({ onNewCategory}: AddCategoryProps ) => {
const [inputValue, setInputValue] = useState('');
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
}

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue('');
}

  return (
    <form onSubmit={onSubmit} >
        <input
            type="text"
            placeholder="Buscar gift"
            value={inputValue}
            onChange={onChange}
        ></input>
    </form>
  )
}
