import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavigationButton from "./navigation_button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed z-50 w-full px-4 pt-4 mb-4">
      <div className="container bg-background flex h-20 px-10 justify-between max-w-screen-2xl items-center border rounded-full shadow-sm dark:shadow-accent-foreground">
        <NavigationMenu className="min-w-full font-medium">
          <div className="flex w-full justify-between items-center">
            {/* Logo */}
            <div className="relative w-[147px] h-[24px]">
              <Image
                src="/assets/memotag-logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex flex-1 justify-between px-4 items-center gap-6 relative">
              <div className="flex-1">
                <NavigationMenuList className="flex w-full justify-center gap-6 px-4">
                  <NavigationButton link="/" title={<p>Home</p>} />
                  <NavigationButton link="/about" title={<p>About Us</p>} />
                  <NavigationButton link="/mindmap" title={<p>MindMap</p>} />
                  <NavigationButton
                    link="/caregivers"
                    title={<p>Caregivers</p>}
                  />
                </NavigationMenuList>
              </div>

              <div className="flex gap-3">
                <Link href="/contact">
                  <Button className="rounded-full p-3 font-medium text-white">
                    Contact Us
                  </Button>
                </Link>

                <Link href="/waitlist">
                  <Button className="flex gap-2 items-center justify-center bg-gradient-to-r from-[#60D669] to-[#00B30E] text-white text-nowrap text-sm font-medium p-3 rounded-full shadow-lg transition duration-300">
                    Join WaitList
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Nav */}
            <div className="flex md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Menu />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/about">About us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/mindmap">MindMap</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/caregivers">Caregivers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/contact" className="w-full">
                      <Button className="rounded-full p-3 font-medium text-white w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/waitlist" className="w-full">
                      <Button className="flex gap-2 items-center justify-center bg-gradient-to-r from-[#60D669] to-[#00B30E] text-white text-nowrap text-sm font-medium p-3 rounded-full shadow-lg transition duration-300 w-full">
                        Join WaitList
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </NavigationMenu>
      </div>
    </header>
  );
}
