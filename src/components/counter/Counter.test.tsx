import { screen , render, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter.tsx', () => {
  test('should add 1', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    const plusButton = screen.getByRole('button', {
      name: /\+/i
    })

    fireEvent.click(plusButton);

    expect(parseInt(counterValue.innerHTML)).toEqual(1);
  })

  test('should subtract 1', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    const subtractButton = screen.getByRole('button', {
      name: /-/i
    })

    fireEvent.click(subtractButton);

    expect(parseInt(counterValue.innerHTML)).toEqual(-1);
  })

  test('should set initial value', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');

    fireEvent.change(screen.getByTestId('initialValue'), {
      target: { value: '957' }
    })
    expect(parseInt(counterValue.innerHTML)).toEqual(957)
  })

  test("should reset value", () => {
    render(<Counter />);
    const counterValue = screen.getByTestId("counterValue");
    const resetButton = screen.getByRole("button", {
      name: /reset/i,
    });
    fireEvent.click(resetButton);
    expect(parseInt(counterValue.innerHTML)).toEqual(0);
  });
})