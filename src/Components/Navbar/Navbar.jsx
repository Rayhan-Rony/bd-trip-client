import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Logo from "../Logo";
import { Link } from "react-router";
import { User, Menu } from "lucide-react";

import NavMenuLink from "./NavMenuLink";
import { ModeToggle } from "./MoodToggle";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black">
      <div className=" flex items-center justify-between py-9 max-w-11/12 mx-auto">
        <div>
          <Logo></Logo>
        </div>

        <NavigationMenu className=" lg:block hidden  ">
          <NavigationMenuList className="">
            <NavMenuLink className="text-xl me-7 hover:bg-transparent"></NavMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        {/* --- Mobile Navigation --- */}
        <div className="lg:hidden flex gap-4">
          <div>
            <ModeToggle></ModeToggle>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu size={28}></Menu>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <nav className="  flex flex-col justify-center items-center">
                <NavigationMenu>
                  <NavigationMenuList className="flex  text-7xl flex-col mt-4 *:">
                    <NavMenuLink className="text-base "></NavMenuLink>
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="">
                  <User size={28} />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        {/* large screen icon  */}
        <div className="lg:flex  hidden gap-4 items-center">
          <div className=" ">
            <User size={28} />
          </div>
          <div>
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
