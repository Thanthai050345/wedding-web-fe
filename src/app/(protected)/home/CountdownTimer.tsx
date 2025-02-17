"use client";

import { useEffect, useState } from "react";

const targetDate = new Date("2025-04-15T00:00:00").getTime();

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  const timeUnits: (keyof typeof timeLeft)[] = [
    "days",
    "hours",
    "minutes",
    "seconds",
  ];

  return (
    <div className="mt-6 flex justify-center space-x-4 text-2xl sm:text-3xl font-semibold">
      {timeUnits.map((unit) => (
        <div key={unit} className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl font-bold">
            {timeLeft[unit]}
          </span>
          <span className="text-sm sm:text-base">
            {unit === "days"
              ? "วัน"
              : unit === "hours"
              ? "ชั่วโมง"
              : unit === "minutes"
              ? "นาที"
              : "วินาที"}
          </span>
        </div>
      ))}
    </div>
  );
}
