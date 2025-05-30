"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/img/fin_logo.png" alt="Financieel Evenwicht" width={180} height={70} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu delayDuration={999999}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/"}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/over" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/over"}>
                    Over ons
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Diensten</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/diensten/particulier" title="Particuliere dienstverlening">
                      Belastingaangiften, toeslagen en financieel advies voor particulieren
                    </ListItem>
                    <ListItem href="/diensten/zakelijk" title="Zakelijke dienstverlening">
                      Administratie, belastingaangiften en advies voor ondernemers
                    </ListItem>
                    <ListItem href="/diensten/bewindvoering" title="Bewindvoering">
                      Beschermingsbewind en budgetcoaching
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/tarieven" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/tarieven"}>
                    Tarieven
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/contact"}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-1">
            <Link
              href="/"
              className={cn(
                "block py-2 px-3 rounded-md",
                pathname === "/" ? "bg-primary text-white" : "hover:bg-muted",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/over"
              className={cn(
                "block py-2 px-3 rounded-md",
                pathname === "/over" ? "bg-primary text-white" : "hover:bg-muted",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Over ons
            </Link>
            <div className="py-2 px-3">
              <div className="font-medium">Diensten</div>
              <div className="pl-4 mt-1 space-y-1 border-l-2 border-muted">
                <Link
                  href="/diensten/particulier"
                  className={cn(
                    "block py-1 px-2 rounded-md",
                    pathname === "/diensten/particulier" ? "bg-primary text-white" : "hover:bg-muted",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Particuliere dienstverlening
                </Link>
                <Link
                  href="/diensten/zakelijk"
                  className={cn(
                    "block py-1 px-2 rounded-md",
                    pathname === "/diensten/zakelijk" ? "bg-primary text-white" : "hover:bg-muted",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Zakelijke dienstverlening
                </Link>
                <Link
                  href="/diensten/bewindvoering"
                  className={cn(
                    "block py-1 px-2 rounded-md",
                    pathname === "/diensten/bewindvoering" ? "bg-primary text-white" : "hover:bg-muted",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  bewindvoering
                </Link>
              </div>
            </div>
            <Link
              href="/tarieven"
              className={cn(
                "block py-2 px-3 rounded-md",
                pathname === "/tarieven" ? "bg-primary text-white" : "hover:bg-muted",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Tarieven
            </Link>
            <Link
              href="/contact"
              className={cn(
                "block py-2 px-3 rounded-md",
                pathname === "/contact" ? "bg-primary text-white" : "hover:bg-muted",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
