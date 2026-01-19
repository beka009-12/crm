"use client";
import { Provider } from "@/src/provider/Provider";
import { ReactNode, FC, Suspense } from "react";

interface ILay {
  children: ReactNode;
}

const LayoutClient: FC<ILay> = ({ children }) => {
  return (
    <Provider>
      <Suspense>{children}</Suspense>
    </Provider>
  );
};

export default LayoutClient;
