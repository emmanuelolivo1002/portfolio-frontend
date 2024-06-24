"use client";
import { useState, useEffect } from "react";

// Components
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

// Types
import { LinkType } from "@/types/linkTypes";

interface HeaderProps {
  data: {
    navigationLink: LinkType[];
  };
}

const HeaderNav = ({ data }: Readonly<HeaderProps>) => {
  const { navigationLink } = data;

  const handleClick = (hash: any) => {
    window.location.hash = hash;
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex justify-center sm:p-2">
      <NavigationMenu className="border-b-2 border-ring bg-background/95 px-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:rounded-2xl sm:border-2 sm:px-6">
        <NavigationMenuList className="flex gap-1 overflow-x-auto sm:gap-4">
          {navigationLink.map((link, index) => {
            return (
              <NavigationMenuItem key={index}>
                <Link href={link.url} passHref legacyBehavior>
                  <NavigationMenuLink
                    onClick={() => handleClick(link.url)}
                    className={`block whitespace-nowrap p-2 text-xs hover:bg-primary/60 hover:text-foreground focus:bg-primary focus:font-bold focus:text-primary-foreground active:bg-primary active:font-bold active:text-primary-foreground sm:text-base`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default HeaderNav;
