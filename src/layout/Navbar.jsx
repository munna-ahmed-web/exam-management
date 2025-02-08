import {
  Navbar,
  NavbarContent,
  Button,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Image,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../hooks/AuthContextProvider";
import { motion } from "framer-motion";
import UserPopover from "@/components/UserPopover";
import { Icons } from "@/assets/icons/Icons";
import logo from "/public/logo.webp";
import toast from "react-hot-toast";

import { navBarItemsList } from "../data/navData";
import { ChevronRightIcon } from "lucide-react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar
      isBordered={false}
      isBlurred={false}
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" bg-black/30 py-2 z-50 text-white dark:bg-background/50 backdrop-blur-sm fixed top-0 "
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          // 'data-[active=true]:after:bg-[#428ee6]',
          "data-[active=true]:text-danger",
          "data-[active=false]:hover:text-danger",
        ],
      }}
    >
      <NavbarContent className="md:hidden" justify="center">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent justify="start" className="flex gap-12">
        <motion.div
          className="flex justify-center "
          initial="hidden"
          animate="visible"
          variants={logoVariant}
        >
          <NavLink
            to="/"
            arial-label="home-page"
            className={` ml-4 flex shrink-0 grow-0 justify-center`}
          >
            {/* <Icons.logoICon className="text-danger dark:text-primary" /> */}
            <Image src={logo} alt="logo" className="w-12 h-12" />
          </NavLink>
        </motion.div>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <div className="hidden md:flex gap-8">
          <motion.div
            initial="hidden"
            className="flex gap-6"
            animate="visible"
            variants={menuVariant}
          >
            {navBarItemsList.map((item) => {
              if (!item.hasChild) {
                return (
                  <motion.div variants={childVariant}>
                    <NavLink to={item.href}>
                      {({ isActive }) => (
                        <NavbarItem
                          className="hover:text-danger link-underline"
                          isActive={isActive}
                        >
                          {item.label}
                        </NavbarItem>
                      )}
                    </NavLink>
                  </motion.div>
                );
              }
              if (item.hasChild) {
                return (
                  <Dropdown radius="none">
                    <NavbarItem>
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                          endContent={<ChevronDownIcon />}
                          radius="sm"
                          variant="light"
                        >
                          {item.label}
                        </Button>
                      </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                      aria-label="ACME features"
                      className="w-[340px]"
                      itemClasses={{
                        base: "gap-4",
                      }}
                    >
                      {item.children.map((child) => {
                        return (
                          <DropdownItem
                            key={child.id}
                            as="button"
                            onPress={() => navigate(child.href)}
                          >
                            {child.label}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </Dropdown>
                );
              }
            })}
          </motion.div>
        </div>

        {/* {user && user.userStatus !== "banned" ? (
          <Button
            as={Link}
            to={user.role === "admin" ? "/admin" : "/dashboard/profile"}
            color="primary"
            size="sm"
            variant="bordered"
            className="hidden md:flex border-divider font-medium"
            startContent={
              <Icons.settings className="animate-spinner-ease-spin" />
            }
          >
            {user && user.role === "admin" ? "Dashboard" : "Profile"}
          </Button>
        ) : (
          <Button
            onPress={() =>
              toast.error("Youre Banned, You Cant Access Dashboard Right Now!")
            }
            color="primary"
            size="sm"
            variant="bordered"
            className="hidden md:flex border-divider font-medium"
            startContent={
              <Icons.settings className="animate-spinner-ease-spin" />
            }
          >
            {user && user.role === "admin" ? "Dashboard" : "Profile"}
          </Button>
        )} */}

        <div className=" hidden md:block">{/* <ModeToggle /> */}</div>
      </NavbarContent>

      <NavbarMenu>
        {navBarItemsList.map((item) => {
          if (!item.hasChild) {
            return (
              <NavLink to={item.href}>
                {({ isActive }) => (
                  <NavbarItem
                    className="hover:text-danger h-fit mb-4"
                    isActive={isActive}
                  >
                    {item.label}
                  </NavbarItem>
                )}
              </NavLink>
            );
          }
          if (item.hasChild) {
            return (
              <Dropdown radius="none">
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent text-black"
                      endContent={<ChevronDownIcon />}
                      radius="sm"
                      variant="light"
                    >
                      {item.label}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  // className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {item.children.map((child) => {
                    return (
                      <DropdownItem
                        key={child.id}
                        as="button"
                        onPress={() => navigate(child.href)}
                      >
                        {child.label}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            );
          }
        })}
      </NavbarMenu>

      <NavbarContent justify="end" className="flex gap-12">
        {user ? (
          <UserPopover user={user} logout={logout} />
        ) : (
          <div>
            <Button
              as={Link}
              to={"/login"}
              color="default"
              size="sm"
              className="text-white"
              variant="flat"
            >
              Login
            </Button>
          </div>
        )}
      </NavbarContent>
    </Navbar>
  );
}

const logoVariant = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 80,
    },
  },
};
const menuVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childVariant = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 1,
    },
  },
};
