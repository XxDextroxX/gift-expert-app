
import { UseFetchGifs } from "../hooks/UseFetchGifs";
import { DeleteCategory } from "./DeleteCategory";
import { GifItem } from "./GifItem";

 type GifGridProps = {
    category: string,
    onDeleteCategory: (value: number) => void
    index: number
}

interface Image {
  id: string;
  title: string;
  url: string;
}

export const GifGrid = ({ category, onDeleteCategory, index }: GifGridProps) => {

  const {images, isLoading} = UseFetchGifs(category);    
  return (
   <> 
       <div className="container">
       <h3>{category}</h3>
        <DeleteCategory onDeleteCategory={onDeleteCategory} index={index}/>
       </div>
        {isLoading && <p>Loading...</p>}
        <div className="card-grid">
          {images.map((image: Image) => (
            <GifItem key={image.id} {...image}/>
          ))}
        </div>
   </>
  )
}

