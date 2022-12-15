import { render, screen,fireEvent } from '@testing-library/react';
import { Blog } from '../../hooks/useBlogs';
import { BlogCard } from './BlogCard';

const blogMock: Blog = {
  id: 1,
  img: 'http:link-do-obrazka.pl',
  longText: 'long_text_mock',
  shortText: 'short_text_mock',
  title: 'title_mock'
}

describe('BlogCard.tsx', () => {
  test('blog img should be rendered', () => {
    render(<BlogCard blog={blogMock} />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  })
  test("title is rendered", () => {
    render(<BlogCard blog={blogMock} />);
    const title = screen.getByText("title_mock");
    expect(title).toBeInTheDocument();
  });
  test("shortText is visible after click", () => {
    render(<BlogCard blog={blogMock} />);
    let hiddenText = screen.queryByText('short_text_mock')
    expect(hiddenText).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole("button"))
    hiddenText = screen.getByText('short_text_mock')
    expect(hiddenText).toBeInTheDocument();
  });
})