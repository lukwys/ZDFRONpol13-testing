import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Blog } from '../../hooks/useBlogs';

interface BlogProps {
  blog: Blog,
}

export const BlogCard = ({ blog }: BlogProps) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleClick = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  }

  return (
    <Card>
      <Card.Img src={blog.img} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        {isDescriptionVisible && (
          <Card.Text>{blog.shortText}</Card.Text>
        )}
        <Button onClick={handleClick}>{isDescriptionVisible? 'Hide description' : 'Show description'}</Button>
      </Card.Body>
    </Card>
  )
}