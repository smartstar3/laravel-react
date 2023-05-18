import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import { SvgIcon } from "@/components/Atoms";
import { useLogout } from "@/hooks/redux";
import { ROUTES } from "@/constants";

const menus = [
  { label: 'Dashboard', link: ROUTES.MAIN.DASHBOARD },
  { label: 'Products', link: ROUTES.MAIN.PRODUCTS },
  { label: 'FAQs', link: ROUTES.MAIN.FAQS },
  { label: 'About', link: ROUTES.MAIN.ABOUT },
]

export const MobileMenu = () => {
  const logout = useLogout();

  return (
    <div className="flex items-center">
      <Popover
        placement="bottom-end"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <PopoverHandler>
          <div className="cursor-pointer">
            <SvgIcon name="menu" />
          </div>
        </PopoverHandler>

        <PopoverContent className="rounded-3 px-0 py-0">
          {
            menus.map((menu, index) => (
              <Link
                className="flex cursor-pointer items-center rounded-3 px-4 py-2 hover:text-amber-600"
                to={menu.link}
                key={index}
              >
                {menu.label}
              </Link>
            ))
          }

          <div
            className="flex cursor-pointer items-center rounded-3 px-4 py-2 hover:text-amber-600"
            onClick={logout}
          >
            <SvgIcon name="log-out" className="h-4 w-4" />

            <span className="ml-3">Logout</span>
          </div>
        </PopoverContent>

      </Popover>


    </div>
  )
}
