import React, { useEffect, useState } from 'react';

const EngineeringWorksErrorBoundary = () => {
  type StateTypes = [number, (time: number) => void];
  const [timeLeft, setTime]: StateTypes = useState(65);

  useEffect(() => {
    const timer = setInterval(() => setTime(timeLeft - 1), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  const minutes = (timeLeft / 60).toFixed(2).split('.')[0];
  const seconds = timeLeft % 60;

  return (
    <>
      <h2>We apologize! Engineering works..</h2>
      <p>
        The site will be available in {minutes} minutes {seconds} seconds
      </p>
    </>
  );
};

export default EngineeringWorksErrorBoundary;
