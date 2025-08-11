import React, { useState } from 'react';
import { css } from '@emotion/css';

import { fetchLastLocation } from './backend/fetchLastLocations';

interface MockApiResponse {
  address: {
    street: string;
    city: string;
    id: string;
  };
}

interface Result extends MockApiResponse {
  timestamp: number;
  executionTime: number;
}

// This is an example results data structure
// const results: any = [
//   {
//     timestamp: Date.now(),
//     address: {
//       street: '5th Ave',
//       city: 'Random City',
//     },
//     executionTime: 900,
//   },
//   {
//     timestamp: Date.now() + 2000,
//     address: {
//       street: 'Main Road',
//       city: 'New Town',
//     },
//     executionTime: 400,
//   },
// ];

const getStyles = () => ({
  button: css`
    border: 1px solid black;
    background: transparent;
    padding: 5px;
    margin-bottom: 20px;
  `,
  container: css`
    margin: 10px;
  `,
  stats: css`
  margin-top: 20px;
  `,
});

function App() {
  const [results, setResults] = useState<Result[]>([]);

  const handleOnClick = async () => {
    const timestamp = Date.now();
    const res = await fetchLastLocation();
    const end = Date.now();
    setResults((prev) => [
      ...prev,
      { timestamp, executionTime: end - timestamp, ...res },
    ]);
  };

  let last, slowest, fastest, average;
  if (results.length > 0) {
    last = results[results.length - 1];
    const times = results.map((result) => result.executionTime);
    times.sort((a, b) => a - b);
    fastest = times[0];
    slowest = times[times.length - 1];
    average = Math.floor(
      times.reduce((acc, curr) => acc + curr, 0) / times.length
    );
  }

  const s = getStyles();

  return (
    <div className={s.container}>
      <button className={s.button} onClick={() => handleOnClick()}>
        Get Last Location
      </button>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Street</th>
            <th>City</th>
            <th>Execution Time (ms)</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr>
              <td>{result.timestamp}</td>
              <td>{result.address?.street}</td>
              <td>{result.address?.city}</td>
              <td>{result.executionTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.stats}>
        <div>Fastest: {fastest} ms </div>
        <div>Slowest: {slowest} ms </div>
        <div>Average: {average} ms </div>
      </div>
    </div>
  );
}

export default App;
