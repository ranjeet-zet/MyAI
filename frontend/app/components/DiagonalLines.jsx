import React from 'react';

const DiagonalLines = () => {
  const lines = [];

  for (let i = 26; i >=0; i--) {
    lines.push(
      <div
        key={i}
        className="bg-white w-[100%]"
        style={{ marginTop: `${i}px`, height: `${26 - i}px` }}
      ></div>
    );
  }

  return (
    <div >
      {lines}
    </div>
  );
};

export default DiagonalLines;
