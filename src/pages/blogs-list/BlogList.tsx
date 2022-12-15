import { Container, Row, Col } from 'react-bootstrap'
import { useBlogs } from '../../hooks/useBlogs'
import { BlogCard } from '../../components/blog-card/BlogCard';
import { Navigation } from '../../components/navigation/Navigation';

export const BlogList = () => {
const { blogsList } = useBlogs();

  return (
    <Container>
      <Navigation blogsCount={blogsList.length}/>
      <h1>My blog</h1>
      <Container>
        <Row>
          {blogsList.map((blog, index) => (
            <Col>
              <BlogCard blog={blog} key={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}
