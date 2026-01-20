import { type FC } from "react";
import scss from "./Desctop.module.scss";

const Desctop: FC = () => {
  return (
    <section className={scss.Desctop}>
      <div className={scss.content}>Desctop</div>
    </section>
  );
};

export default Desctop;
