import Calender from "../components/calender/calender";
import DayCalendar from "../components/calender/DayCalendar";
import MonthCalendar from "../components/calender/month-calendar";
import RightSideBar from "../components/calender/RightSideBar";
import WeekCalendar from "../components/calender/week-calendar";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[800px] bg-gray-100">
      <main className="w-2/3 rounded-lg shadow-lg bg-white p-6">
        <div className="flex space-x-4">
          {/* <DayCalendar />
          <Calender /> */}
          {/* <WeekCalendar /> */}
          <MonthCalendar />
          <RightSideBar />
        </div>
      </main>
    </div>
  );
}
