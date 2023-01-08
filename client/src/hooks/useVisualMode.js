import { useState } from "react";

export default function useVisualMode(initialMode) {
  
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  //Allows transition from one display mode to another
  function transition(newMode, replace = false) {
    setMode(newMode);
    
    if (replace) {
      setHistory(prev => [...prev.slice(0, -1)]);
    }
    setHistory(prev => [...prev, newMode])
  };

  //Allows user to go back to the previous mode
  function back() {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    }
  };

  return {mode, transition, back}
}