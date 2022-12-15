import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useBlogs } from '../../hooks/useBlogs'
import { BlogCard } from '../../components/blog-card/BlogCard';
import { Navigation } from '../../components/navigation/Navigation';

export const BlogList = () => {
const { blogsList, isLoading } = useBlogs();

  return (
    <Container>
      <Navigation blogsCount={blogsList.length}/>
      <h1>My blog</h1>
      {isLoading ? <Spinner data-testid="spinner" /> : (
        <Container>
          <Row>
            {blogsList.length ? blogsList.map((blog, index) => (
              <Col key={index}>
                <BlogCard blog={blog} />
              </Col>
            )) : <p>There is no blogs</p>}
          </Row>
      </Container>
      )}
    </Container>
  )
}
