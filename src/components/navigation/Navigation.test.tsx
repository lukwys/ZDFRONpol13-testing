import { render } from '@testing-library/react';
import { Navigation } from './Navigation';

describe('Navigation.tsx', () => {
  test('should render new posts', () => {
    render(<Navigation blogsCount={2} />)
  })
})