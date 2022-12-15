import { render, screen } from '@testing-library/react';
import { BlogList } from './BlogList';
import { server } from '../../mocks/server';
import { rest } from 'msw';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('BlogList.tsx', () => {
  test('should render two blogs', async () => {
    render(<BlogList />);
    const title = await screen.findAllByText(/test title/i);
    expect(title.length).toBe(2);
  });

  test('should render no blogs message', async () => {
    render(<BlogList />);

    await server.use(
      rest.get('http://localhost:3000/blogs', (req, res, ctx) => (
        res(ctx.json([]))
      ))
    )
    const message = await screen.findByText("There is no blogs");
    expect(message).toBeInTheDocument();
  });

  test('spinner is rendered', () => {
    render(<BlogList />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument()
  })
})
