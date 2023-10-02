
type DeleteCategoryProps = {
    onDeleteCategory: (value: number) => void,
    index: number
}


export const DeleteCategory = ({ onDeleteCategory, index }: DeleteCategoryProps) => {
  return (
    <button onClick={() => onDeleteCategory(index)}>
        Eliminar
    </button>
  )
}
