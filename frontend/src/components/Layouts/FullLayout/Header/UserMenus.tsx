import React from "react";
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import { Avatar, SvgIcon } from "@/components/Atoms";
import { useAuthState, useLogout } from "@/hooks/redux";

export const UserMenus = () => {
  const logout = useLogout();
  const { account } = useAuthState();

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
            <Avatar className="mr-3" name={account?.name} size="2rem" round />
          </div>
        </PopoverHandler>
        <PopoverContent className="rounded-3 px-0 py-0">
          <div
            className="flex cursor-pointer items-center rounded-3 px-4 py-2 hover:text-amber-600"
            onClick={logout}
          >
            <SvgIcon name="log-out" className="h-4 w-4" />

            <span className="ml-3">Logout</span>
          </div>
        </PopoverContent>
      </Popover>

      <div className="relative">
        <SvgIcon name="bell" />
        <span className="absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[8px] leading-[12px] text-white">
              2
            </span>
      </div>
    </div>
  )
}
