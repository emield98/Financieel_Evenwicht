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
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navItemClass = (active: boolean) =>
  cn(
    "group relative inline-flex h-11 items-center justify-center rounded-md bg-transparent px-3.5 text-[15px] font-medium tracking-wide text-white/80 transition-colors",
    "hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
    "data-[active]:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-white",
    "after:pointer-events-none after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-white after:transition-transform after:duration-200",
    "hover:after:scale-x-100 data-[state=open]:after:scale-x-100",
    active && "text-white after:scale-x-100",
  )

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const dienstenActive = pathname.startsWith("/diensten")

  return (
    <header className="site-header sticky top-0 z-50 w-full shadow-md">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand">
          <Image
            src="/img/fin_logo.png"
            alt="Financieel & Fiscaal Evenwicht"
            width={288}
            height={100}
            priority
            className="h-16 w-auto sm:h-20 lg:h-[5.5rem]"
          />
        </Link>

        <div className="site-header__bar">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center">
          <NavigationMenu delayDuration={999999}>
            <NavigationMenuList className="gap-0.5">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navItemClass(pathname === "/")} active={pathname === "/"}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/over" legacyBehavior passHref>
                  <NavigationMenuLink className={navItemClass(pathname === "/over")} active={pathname === "/over"}>
                    Over ons
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemClass(dienstenActive)}>
                  Diensten
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[420px] gap-1 p-3">
                    <ListItem href="/diensten/particulier" title="Particuliere dienstverlening">
                      Belastingaangiften, toeslagen en financiële begeleiding
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
                  <NavigationMenuLink className={navItemClass(pathname === "/tarieven")} active={pathname === "/tarieven"}>
                    Tarieven
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navItemClass(pathname === "/contact")} active={pathname === "/contact"}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 rounded-full text-white hover:bg-white/15 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/20 bg-white lg:hidden">
          <div className="wrap wrap--bar space-y-1 py-3">
            <MobileLink href="/" pathname={pathname} onNavigate={() => setIsMenuOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/over" pathname={pathname} onNavigate={() => setIsMenuOpen(false)}>
              Over ons
            </MobileLink>
            <div className="px-3 py-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary/80">Diensten</div>
              <div className="mt-2 space-y-1 border-l-2 border-primary/20 pl-3">
                <MobileLink href="/diensten/particulier" pathname={pathname} onNavigate={() => setIsMenuOpen(false)}>
                  Particuliere dienstverlening
                </MobileLink>
                <MobileLink href="/diensten/zakelijk" pathname={pathname} onNavigate={() => setIsMenuOpen(false)}>
                  Zakelijke dienstverlening
                </MobileLink>
                <MobileLink href="/diensten/bewindvoering" pathname={pathname} onNavigate={() => setIsMenuOpen(false)}>
                  Bewindvoering
                </MobileLink>
              </div>
            </div>
            <MobileLink href="/tarieven" pathname={pathname} onNavigate={() => setIsMenuOpen(false)}>
              Tarieven
            </MobileLink>
            <MobileLink href="/contact" pathname={pathname} onNavigate={() => setIsMenuOpen(false)}>
              Contact
            </MobileLink>
          </div>
        </div>
      )}
    </header>
  )
}

function MobileLink({
  href,
  pathname,
  onNavigate,
  children,
}: {
  href: string
  pathname: string
  onNavigate: () => void
  children: React.ReactNode
}) {
  const active = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors",
        active ? "bg-primary text-white" : "text-foreground/80 hover:bg-primary/5 hover:text-primary",
      )}
      onClick={onNavigate}
    >
      {children}
    </Link>
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
              "group block select-none rounded-lg border border-transparent p-3.5 leading-none no-underline outline-none transition-colors hover:border-primary/15 hover:bg-primary/[0.05] focus:border-primary/15 focus:bg-primary/[0.05]",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-semibold leading-none text-foreground transition-colors group-hover:text-primary">
              {title}
            </div>
            <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
