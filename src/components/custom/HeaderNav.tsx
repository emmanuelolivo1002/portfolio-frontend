import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  data: {
    navigationLink: {
      id: number;
      label: string;
      url: string;
    }[];
  };
}

export async function HeaderNav({ data }: Readonly<HeaderProps>) {
  const { navigationLink } = data;
  return (
    <nav className="fixed mx-auto hidden items-center justify-between bg-primary-foreground py-2 md:flex">
      <div className="flex w-full items-center justify-center gap-4">
        {navigationLink.map((link) => (
          <Link key={link.url} href={link.url}>
            <Button>{link.label}</Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
