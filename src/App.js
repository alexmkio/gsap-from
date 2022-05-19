import { gsap } from "gsap";
import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [state, setState] = useState(true);

  useEffect(() => {
    gsap.from(".circle", { duration: 2, y: 150 });
  }, [state]);

  const handleClick = () => {
    setState(!state)
  }

  return <div className="circle" onClick={handleClick}></div>;
}

export default App;
