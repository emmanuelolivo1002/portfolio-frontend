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
    <nav className="flex items-center justify-between py-2 sticky hidden">
      <div className="flex items-center justify-center w-full gap-4">
        {navigationLink.map(link => (
          <Link key={link.url} href={link.url}>
            <Button>{link.label}</Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
