/* eslint-disable react/prop-types */

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Separator } from "./ui/separator";

import { ModeToggle } from "./ui/ModeToggle";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const UserPopover = ({ user, logout }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("User logged out");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src={user?.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        sideOffset={6}
        alignOffset={0}
        className=" z-[1000] bg-[#26262ada] backdrop-blur-2xl text-white rounded-lg backdrop-contrast-125 backdrop-saturate-200 border-[#262626]"
      >
        <div className="flex flex-col items-center">
          <p className="text-lg ">{user?.email}</p>
          <Separator className="my-4" />
          <ModeToggle />
          <Button
            fullWidth
            variant="light"
            className=" bg-[#27272A] rounded-xl py-1 px-4 text-white mt-2"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
          <Button
            fullWidth
            variant="light"
            className=" bg-[#27272A] rounded-xl py-1 px-4 text-white mt-2"
            onPress={() => navigate("/me/update")}
          >
            Profile
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default UserPopover;
