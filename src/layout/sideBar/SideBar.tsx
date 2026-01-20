"use client";
import { type FC } from "react";
import scss from "./SideBar.module.scss";
import { links } from "@/src/utils/Links";
import { useRouter, usePathname } from "next/navigation";

const SideBar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className={scss.SideBar}>
      <div className={scss.content}>
        <h1 className={scss.title}>CRM - MED</h1>

        <div className={scss.routs}>
          {links.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.id}
                onClick={() => router.push(item.path)}
                className={`${scss.route} ${isActive ? scss.active : ""}`}
              >
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={scss.svg}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.svgLink}
                    />
                  </svg>
                  {item.name}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
