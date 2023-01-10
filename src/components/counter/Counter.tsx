import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const maxValue = 10;

export const Counter = () => {
  const [value, setValue] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (initialValue) setValue(initialValue)
  }, [initialValue])

  const handlePlusClick = () => {
    setValue(value + step);
  };

  const handleMinusClick = () => {
    setValue(value - step);
  };

  const handleResetClick = () => {
    setValue(0);
    setInitialValue(0);
    setStep(1);
  }

  return (
    <Container>
      <h2>Counter</h2>
      <span>Initial value:</span>
      <input type="number" data-testid="initialValue" value={initialValue} onChange={event => setInitialValue(parseInt(event.target.value))}/>
      <span>Step value:</span>
      <input type="number" min={1} max={maxValue} value={step} onChange={event => setStep(parseInt(event.target.value))}/>
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