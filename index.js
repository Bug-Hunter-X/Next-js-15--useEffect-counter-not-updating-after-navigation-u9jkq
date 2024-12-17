```javascript
// pages/about.js
import {useEffect, useState, useMemo} from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const memoizedCount = useMemo(() => count, [count]);

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {memoizedCount}</p>
    </div>
  );
}
```