import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

export default function NavigationButton({
  link,
  title,
}: {
  link: string;
  title: React.ReactNode,
}) {
  return (
    <NavigationMenuItem>
      <Link
        href={link}
        className="px-4 py-2 ease-in-out transition-all"
      >
        <span className="inline-block min-w-[70px] text-center font-medium hover:font-semibold">
          {title}
        </span>
      </Link>
    </NavigationMenuItem>
  );
}
