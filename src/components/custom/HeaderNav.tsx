"use client";

// Components
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  data: {
    navigationLink: {
      id: number;
      label: string;
      url: string;
    }[];
  };
}

import { useState, useEffect } from "react";

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

export default useHash;

export function HeaderNav({ data }: Readonly<HeaderProps>) {
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
    <div className="fixed left-0 right-0 top-0 z-50 hidden justify-center p-2 md:flex">
      <NavigationMenu className="rounded-2xl border-2 border-primary bg-background px-6">
        <NavigationMenuList className="flex space-x-4">
          {navigationLink.map((link, index) => {
            const isActive = currentHash === link.url;

            return (
              <NavigationMenuItem key={index}>
                <Link href={link.url} passHref legacyBehavior>
                  <NavigationMenuLink
                    onClick={() => handleClick(link.url)}
                    className={`block p-2 hover:bg-secondary hover:text-white ${
                      isActive ? "bg-primary font-bold text-background" : ""
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
}
