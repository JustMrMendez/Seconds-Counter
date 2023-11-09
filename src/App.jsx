import { useEffect, useState } from "react"
import { SecondsCounter } from "./SecondsCounter";

function App() {
const [counter, setCounter] = useState(0);

useEffect(() => {
  setInterval(() => {
    setCounter(counter + 1);
  }, 1000);
}, [counter]);

return (
  <>
  <SecondsCounter counter={counter} />
  </>
);
}


export default App