import { type FC } from "react";
import scss from "./Calendar.module.scss";

const Calendar: FC = () => {
  return (
    <section className={scss.Calendar}>
      <div className="container">
        <div className={scss.content}>Calendar</div>
      </div>
    </section>
  );
};

export default Calendar;
