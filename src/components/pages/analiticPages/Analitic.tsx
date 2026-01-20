import { type FC } from "react";
import scss from "./Analitic.module.scss";

const Analitic: FC = () => {
  return (
    <section className={scss.Analitic}>
      <div className={scss.content}>Analitic</div>
    </section>
  );
};

export default Analitic;
