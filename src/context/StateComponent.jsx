import { createContext, useState } from "react";

export const CounterContext = createContext();

const StateComponent = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [prods, setProds] = useState(0);

  const sumar = () => {
    if (counter < 8) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const sumarProds = () => {
    setProds(prods + 1);
  };

  const resetProds = () => {
    setProds(0);
  }
  return (
    <CounterContext.Provider value={{ counter, sumar, restar, sumarProds, prods, resetProds }}>
      {children}
    </CounterContext.Provider>
  );
};

export default StateComponent;
