import { useState } from 'react';
import Button from './Button';

function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounter() {
    setCounter((x) => x + 1);
  }

  return (
    <>
      <div className="flex items-center mt-4 flex flex-col ">
        <Button className="bg-pink-500" onClick={handleCounter}>
          Count
        </Button>

        <h2 className="text-2xl mt-3">{counter}</h2>
      </div>
    </>
  );
}

export default Counter;
