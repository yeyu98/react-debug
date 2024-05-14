import { useState, useEffect, useMemo, useCallback } from 'react';
// import AAA from './AAA';
// import logo from './logo.svg';
import './App.css';

function App() {
  // NOTE 调试fiber构建
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <AAA />
  //       <img src={logo} className="App-logo" alt="logo" />
  //     </header>
  //   </div>
  // );

  // NOTE 调试hooks
  // 1. useState
  const [a, setA] = useState(1);
  // 2. useEffect
  useEffect(() => {
    console.log(`effect 1 created`);
  });

  // 3. useMemo
  const memoValue = useMemo(() => a + 1, [a]);
  // 4. useCallback
  const fn = useCallback(() => {
    console.log(`useCallback：${a}`)
  }, [a])
  // 5. useState
  const [b] = useState(2);  
  // 6. useEffect
  useEffect(() => {
    console.log(`effect 2 created`);
  });
  return (
    <>
      <h1>memoValue：{memoValue}</h1>
      <button onClick={() => setA(a + 1)}>{a}</button>
      <button>{b}</button>
    </>
  );
}

export default App;
