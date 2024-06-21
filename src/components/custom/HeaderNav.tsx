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

const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
};

const HeaderNav = ({ data }: Readonly<HeaderProps>) => {
  const { navigationLink } = data;

  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Set the initial hash
    setCurrentHash(window.location.hash);

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = (hash: any) => {
    setCurrentHash(hash);
    window.location.hash = hash;
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex justify-center sm:p-2">
      <NavigationMenu className="border-b-2 border-ring bg-background/95 px-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:rounded-2xl sm:border-2 sm:px-6">
        <NavigationMenuList className="flex gap-1 overflow-x-auto sm:gap-4">
          {navigationLink.map((link, index) => {
            const isActive = currentHash === link.url;
            return (
              <NavigationMenuItem key={index}>
                <Link href={link.url} passHref legacyBehavior>
                  <NavigationMenuLink
                    onClick={() => handleClick(link.url)}
                    className={`block whitespace-nowrap p-2 text-xs hover:bg-primary/60 hover:text-foreground focus:bg-primary focus:font-bold focus:text-primary-foreground active:bg-primary active:font-bold active:text-primary-foreground sm:text-base ${
                      isActive
                        ? "bg-primary font-bold text-primary-foreground"
                        : ""
                    }`}
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
