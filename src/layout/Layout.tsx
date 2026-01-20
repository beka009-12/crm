import { type FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import SideBar from "./sideBar/SideBar";

interface ILay {
  children: ReactNode;
}

const Layout: FC<ILay> = ({ children }) => {
  return (
    <div className={scss.Layout}>
      <SideBar />

      <div className={scss.content}>
        <Header />
        <main className={scss.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
