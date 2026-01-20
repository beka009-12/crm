import { type FC } from "react";
import scss from "./Home.module.scss";

const Home: FC = () => {
  return (
    <section className={scss.Home}>
      <div className={scss.content}>Home</div>
    </section>
  );
};

export default Home;
