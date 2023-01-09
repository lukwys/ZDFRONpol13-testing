import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

export const Counter = () => {
  const [value, setValue] = useState<number | string>(0);
  const [initialValue, setInitialValue] = useState('');

  useEffect(() => {
    if (initialValue) setValue(initialValue)
  }, [initialValue])

  const handlePlusClick = () => {
    setValue(+value + 1);
  };

  const handleMinusClick = () => {
    setValue(+value - 1);
  };

  const handleResetClick = () => {
    setValue(0)
  }

  return (
    <Container>
      <h2>Counter</h2>
      <span>Initial value:</span>
      <input data-testid="initialValue" value={initialValue} onChange={event => setInitialValue(event.target.value)}/>
      <Container>
        <Button onClick={handleMinusClick}>-</Button>
        <span data-testid="counterValue">{value}</span>
        <Button onClick={handlePlusClick}>+</Button>
      </Container>
      <Container>
        <Button onClick={handleResetClick}>Reset</Button>
      </Container>
    </Container>
  )
}