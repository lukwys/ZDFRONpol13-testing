import { useEffect, useState } from 'react';

export interface Blog {
  id: number,
  title: string,
  shortText: string,
  loggText: string,
  img: string,
}

export const useBlogs = () => {
  const [blogsList, setBlogsList] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await fetch('http://localhost:3000/blogs');
      const blogsList = await data.json();

      setBlogsList(blogsList);
    }
    fetchBlogs();
  }, [])

  return { blogsList }
}