import { useEffect, useState } from 'react';

export interface Blog {
  id: number,
  title: string,
  shortText: string,
  longText: string,
  img: string,
}

export const useBlogs = () => {
  const [blogsList, setBlogsList] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch('http://localhost:3000/blogs');
      const blogsList = await data.json();

      setBlogsList(blogsList);
      setIsLoading(false);
    }
    fetchBlogs();
  }, [])

  return { blogsList, isLoading }
}