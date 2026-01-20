import { type FC } from "react";
import scss from "./PriceList.module.scss";

const PriceList: FC = () => {
  return (
    <section className={scss.PriceList}>
      <div className="container">
        <div className={scss.content}>PriceList</div>
      </div>
    </section>
  );
};

export default PriceList;
