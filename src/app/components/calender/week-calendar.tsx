"use client";
import React from "react";

const WeekCalendar: React.FC = () => {
  // Generate time slots from 9:00 AM to 8:00 AM the next day
  const times = [
    ...Array.from({ length: 12 }, (_, i) => {
      const hour = 9 + i; // 9:00 AM to 8:00 PM
      const period = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour > 12 ? hour - 12 : hour;
      return `${formattedHour}:00 ${period}`;
    }),
    ...Array.from({ length: 8 }, (_, i) => {
      const hour = i + 1; // 1:00 AM to 8:00 AM
      return `${hour}:00 AM`;
    }),
  ];

  // Get current date and calculate the current week's days
  const today = new Date();
  const currentDay = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  const weekStart = new Date(today); 
  weekStart.setDate(today.getDate() - currentDay + 1); // Set the start to Monday

  // Generate days for the week with their numeric dates
  const days = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    const dayName = day.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., Mon, Tue, etc.
    const dayNumber = day.getDate(); // e.g., 2, 3, etc.
    return `${dayName} ${dayNumber}`;
  });

  // Reorder days so that the current day appears first
  const reorderedDays = [...days.slice(currentDay - 1), ...days.slice(0, currentDay - 1)];

  return (
    <div className="w-[855px] h-[500px] container  py-1 rounded-lg shadow-lg overflow-y-scroll hide-scrollbar">
      <div className="grid grid-cols-[50px,1fr,1fr,1fr,1fr,1fr,1fr,1fr] border border-gray-300">
        <div className="border border-gray-300 bg-gray-100"></div>

        {/* Header row for days with the current day's numeric day appearing first */}
        {reorderedDays.map((day) => (
          <div
            key={day}
            className="text-center p-2 border border-gray-300 bg-gray-100 font-light"
          >
            {day}
          </div>
        ))}

        {/* Rows for times and time slots */}
        {times.map((time) => (
          <React.Fragment key={time}>
            <div className="border border-gray-300 text-right p-1 bg-gray-100 w-[50px] text-xs text-gray-500 font-bold">
              {time}
            </div>

            {reorderedDays.map((_, index) => (
              <div
                key={index}
                className="border border-gray-300 h-16 hover:bg-gray-200 bg-white"
              ></div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
