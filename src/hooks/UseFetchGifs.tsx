import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

interface Image {
    id: string;
    title: string;
    url: string;
  }

export const UseFetchGifs = (category: string) => {
    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState(true)
    const getImages = async (category: string) => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setLoading(false);
    }
    useEffect(() => {
      getImages(category);
    }, []) 
  return{
    images: images,
    isLoading: loading
  }
}
