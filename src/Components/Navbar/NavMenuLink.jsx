import {
  NavigationMenuLink,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import React from "react";
import { Link } from "react-router";

const NavMenuLink = ({ className }) => {
  const navItemNames = {
    Home: "/",
    Destinations: "/destinations",
    Tour: "/tour",
    Blogs: "/blogs",
    Page: "/page",
    Contact: "/contact",
  };

  return Object.entries(navItemNames).map(([routeName, routeDestinations]) => (
    <NavigationMenuItem key={routeName} className="">
      <NavigationMenuLink className={`${className} relative `} asChild>
        <Link
          className="after:absolute after:bottom-0 after:left-0 after:w-full after:h-1  after:bg-black dark:after:bg-white after:scale-x-0 after:origin-center after:ease-in-out after:duration-1000 after:text-red-500 hover:after:scale-x-100 after:content-[''] after:transition-all "
          to={routeDestinations}
        >
          {routeName}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  ));
};

export default NavMenuLink;
