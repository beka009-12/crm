import { type FC } from "react";
import scss from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={scss.Header}>
      <div className={scss.content}>Header</div>
    </header>
  );
};

export default Header;
