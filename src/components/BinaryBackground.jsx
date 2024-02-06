import React, { useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const containerRef = useRef();
  const numColumns = 250; // Adjust the number of columns
  const numRows = 60; // Adjust the number of rows
  const numCharacters = numColumns * numRows;

  useEffect(() => {
    const updateBinaryRain = () => {
      const p = containerRef.current;
      let j = 0;

      setInterval(() => {
        let s = '';
        for (let i = 0; i < numCharacters; i++) {
          if ((i % numColumns) !== 0) {
            const X = (i % numColumns) - numColumns / 2;
            const Y = 2 * (Math.floor(i / numColumns) - numRows / 2);
            const dist = Math.hypot(X, Y);
            const amplitude = Math.sin((dist / 1000) + j / 1000); // Adjust the frequency and speed
            const index = Math.abs(j - Math.floor(dist - 0.7 + amplitude)) % 8;
            s += 'BITSkrieg'[index];
          } else {
            s += '\n';
          }
        }

        p.innerHTML = s;
        j++;
      }, 150);
    };

    updateBinaryRain();
  }, []);

  return( 
        <pre ref={containerRef} id="p"></pre>
  )
};

export default BinaryBackground;

