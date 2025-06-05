'use client';

import { useEffect, useState } from 'react';

export default function StatsCounter({ end, duration = 2, suffix = '', decimals = 0, className }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className={className}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}