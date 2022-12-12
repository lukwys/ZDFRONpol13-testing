import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import { TodoList } from './TodoList'

const setup = (text: string) => render(<TodoList text={text}/>);

describe('TodoList.tsx', () => {
  test('title is rendered', () => {
    //render komponentu
    setup('mockTest')

    //logika testu
    const title = screen.getByText('Todo List');

    //sprawdzenie testu
    expect(title.innerHTML).toEqual('Todo List');
  })

  test('textProp is rendered', () => {
    setup('mockTest2');

    const textProp = screen.getByText('mockTest2');

    expect(textProp.innerHTML).toEqual('mockTest2');
  });

  test('click me button is rendered', () => {
    setup('mockTest')

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toEqual(3);
  })

  test('clickMe button is rendered', () => {
    setup('mockTest')

    const clickMeButton = screen.getByTestId('clickMe')

    expect(clickMeButton).toBeInTheDocument();
  })

  test('is lorem is visble after click', () => {
    setup('mockTest');

    fireEvent.click(screen.getByTestId('clickMe'));
    const lorem = screen.getByTestId('lorem');
    expect(lorem).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('clickMe'));
    expect(lorem).not.toBeInTheDocument()
  })
})