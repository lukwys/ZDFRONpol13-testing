import { Container, Row, Col } from 'react-bootstrap'
import { useBlogs } from '../../../hooks/useBlogs'
import { BlogCard } from '../../blog-card/BlogCard';
import { Navigation } from '../../navigation/Navigation';

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
