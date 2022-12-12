import { useState } from 'react';

interface TodoListProps  {
  text: string
}

export const TodoList = ({ text }: TodoListProps) => {
  const [isVisible, setIsVisible] = useState(false);
  //handle Click
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <p>Todo List</p>
      <p>{text}</p>
      <button>Click me</button>
      <button data-testid="clickMe" onClick={handleClick}>Click me</button>
      <button>Click me</button>
      {isVisible && (
        <p data-testid="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis saepe, porro expedita debitis animi asperiores ipsum voluptatem dicta repellendus dolore corrupti ab omnis fuga rem reiciendis quas, quibusdam excepturi.</p>
      )}
    </div>
  );
}
