import { type FC } from "react";
import scss from "./Record.module.scss";

const Record: FC = () => {
  return (
    <section className={scss.Record}>
      <div className="container">
        <div className={scss.content}>Record</div>
      </div>
    </section>
  );
};

export default Record;
