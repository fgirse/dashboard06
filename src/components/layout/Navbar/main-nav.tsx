"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "../../../../lib/lib/utils";
import { Button } from "@/components/ui/Butto";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

// Navigation items with dropdown menus
const navItems = [
  {
    title: "Products",
    href: "/products",
    dropdown: [
      { title: "Analytics", href: "/products/analytics" },
      { title: "Engagement", href: "/products/engagement" },
      { title: "Security", href: "/products/security" },
      { title: "Integrations", href: "/products/integrations" },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    dropdown: [
      { title: "Enterprise", href: "/solutions/enterprise" },
      { title: "Small Business", href: "/solutions/small-business" },
      { title: "Startups", href: "/solutions/startups" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    dropdown: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Documentation", href: "/resources/docs" },
      { title: "Guides", href: "/resources/guides" },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
]

export default  function MainNav() {
  const isMobile = useMobile()

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">8zense.com</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <React.Fragment key={item.title}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 font-normal">
                        {item.title}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.title} asChild>
                          <Link href={dropdownItem.href}>{dropdownItem.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href={item.href} className={cn("text-sm font-medium transition-colors hover:text-primary")}>
                    {item.title}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Navigate to different sections of the site.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <div key={item.title} className="space-y-3">
                  <Link href={item.href} className="text-base font-medium hover:text-primary">
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 border-l space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
       C
      )}
    </div>
  )
}
