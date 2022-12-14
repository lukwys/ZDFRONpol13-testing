import { Nav } from 'react-bootstrap'

interface NavigationProps {
  blogsCount: number;
}

export const Navigation = ({ blogsCount }: NavigationProps) => {
  return (
    <Nav
      className="justify-content-end"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link>New posts: {blogsCount}</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
