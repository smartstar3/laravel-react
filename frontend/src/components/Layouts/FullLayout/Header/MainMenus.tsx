import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "classnames";
import { ROUTES } from "@/constants";

const menus = [
  { label: 'Dashboard', link: ROUTES.MAIN.DASHBOARD },
  { label: 'Products', link: ROUTES.MAIN.PRODUCTS },
  { label: 'FAQs', link: ROUTES.MAIN.FAQS },
  { label: 'About', link: ROUTES.MAIN.ABOUT },
]

export const MainMenus = () => {
  const location = useLocation();

  const isActive = (link: string) => {
    if (link === ROUTES.MAIN.DASHBOARD) {
      return location.pathname === link;
    }

    return location.pathname.includes(link);
  };


  return (
    <div className="flex items-center gap-4 md:gap-10">
      {
        menus.map((menu, index) => (
          <Link
            className={clsx('hover:text-amber-600', {
              'text-amber-500': isActive(menu.link)
            })}
            to={menu.link}
            key={index}
          >
            {menu.label}
          </Link>
        ))
      }
    </div>
  )
}
