import { useEffect, useState } from "react"
import { SecondsCounter } from "./SecondsCounter";

function App() {
const [counter, setCounter] = useState(0);

useEffect(() => {
  const intervar = setInterval(() => {
    setCounter(counter + 1);
  }, 1000);

  return () => clearInterval(intervar)
}, [counter]);

return (
  <>
  <SecondsCounter counter={counter} />
  </>
);
}


export default App
